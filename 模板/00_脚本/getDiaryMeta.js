// getDiaryMeta.js
// 日记元数据：位置 / 天气 / 农历
//
// 定位优先级（越靠前越精确）：
//   1) Windows 定位服务（WiFi/基站，误差约 100m）→ 高德逆地理编码
//   2) ipinfo.io 经纬度 → 高德逆地理编码（运营商 IP，通常落在省会）
//   3) 高德 IP 定位
//   4) 上次缓存的城市
//   5) FALLBACK_CITY
// 天气：高德天气 API（优先用区县级 adcode，能精确到「肥城市」）
//
// 位置/天气都是「写这篇日记时」的快照，不会自己刷新。

const GAODE_KEY = "ea84510071aeef2f2496ec35c2701370"; // 高德 Key
const JUHE_KEY = "467fac7654b5fb1a6aa3acfe8a5383be"; // 聚合数据（农历）

// 机房/运营商省级出口常见城市，命中了就继续往下找更精确的
const SUSPECT_IP_CITIES = ["北京", "上海", "广州", "深圳", "杭州", "呼和浩特", "张家口", "廊坊"];

const FALLBACK_CITY = "肥城";

// ── 缓存 ────────────────────────────────────────────────
function makeCache() {
	let fs = null;
	let path = null;
	try {
		fs = require("fs");
		path = require("path");
	} catch (e) {
		/* 沙箱无 require */
	}
	let file = null;
	try {
		const base = app.vault.adapter.basePath;
		if (base && path) file = path.join(base, "Archive", "Scripts", "_diary-location.json");
	} catch (e) {
		/* ignore */
	}
	return {
		read() {
			try {
				if (fs && file && fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
			} catch (e) {
				/* ignore */
			}
			return null;
		},
		write(obj) {
			try {
				if (fs && file) fs.writeFileSync(file, JSON.stringify(obj), "utf8");
			} catch (e) {
				/* ignore */
			}
		},
	};
}

async function getJSON(url) {
	const res = await fetch(url);
	return await res.json();
}

// 经纬度 → {place, city, adcode}
async function regeo(lat, lon) {
	try {
		const g = await getJSON(
			`https://restapi.amap.com/v3/geocode/regeo?key=${GAODE_KEY}&location=${lon},${lat}&extensions=all`
		);
		if (g.status === "1" && g.regeocode && g.regeocode.addressComponent) {
			const ac = g.regeocode.addressComponent;
			const city = String((typeof ac.city === "string" && ac.city) || ac.province || "").replace(/市$/, "");
			const district = String(ac.district || "");
			const township = String(ac.township || "");
			const street = String((ac.streetNumber && ac.streetNumber.street) || "");

			// 位置写细一点：区县 + 乡镇/街道（有街道时优先街道）
			const base = district || ac.city || ac.province || "";
			let extra = "";
			if (street && street !== base) extra = street;
			else if (township && township !== base) extra = township;
			const place = base + extra;

			return { place, city, district, township, street, adcode: ac.adcode, formatted: g.regeocode.formatted_address };
		}
	} catch (e) {
		console.log("[getDiaryMeta] 逆地理编码失败：", e);
	}
	return null;
}

// 1) Windows 定位服务
function locateByWindows() {
	try {
		const cp = require("child_process");
		const path = require("path");
		const base = app.vault.adapter.basePath;
		const script = path.join(base, "Archive", "Scripts", "get-location.ps1");
		const out = cp.execSync(
			`powershell.exe -NoProfile -ExecutionPolicy Bypass -File "${script}"`,
			{ timeout: 25000, encoding: "utf8", windowsHide: true }
		);
		const m = /LAT=([\d.]+);LON=([\d.]+)/.exec(out || "");
		if (m) {
			return { lat: parseFloat(m[1]), lon: parseFloat(m[2]) };
		}
		console.log("[getDiaryMeta] Windows 定位无输出：", (out || "").trim().slice(0, 200));
	} catch (e) {
		console.log("[getDiaryMeta] Windows 定位调用失败：", e.message || e);
	}
	return null;
}

// 2) ipinfo 经纬度
async function locateByIPInfo() {
	try {
		const info = await getJSON("https://ipinfo.io/json");
		if (info && info.loc) {
			const [lat, lon] = String(info.loc).split(",").map(Number);
			if (isFinite(lat) && isFinite(lon)) return { lat, lon };
		}
	} catch (e) {
		console.log("[getDiaryMeta] ipinfo 失败：", e);
	}
	return null;
}

// 3) 高德 IP 定位（只能到市）
async function locateByAmapIP() {
	try {
		const d = await getJSON(`https://restapi.amap.com/v3/ip?key=${GAODE_KEY}&output=json`);
		if (d.status === "1" && d.city && typeof d.city === "string" && d.city) {
			const city = d.city.replace(/市$/, "");
			if (city) return { place: city, city, adcode: d.adcode, via: "amap-ip" };
		}
	} catch (e) {
		console.log("[getDiaryMeta] 高德 IP 失败：", e);
	}
	return null;
}

async function geocode(cityName) {
	try {
		const d = await getJSON(
			`https://restapi.amap.com/v3/geocode/geo?key=${GAODE_KEY}&address=${encodeURIComponent(cityName)}`
		);
		if (d.status === "1" && d.geocodes && d.geocodes.length) {
			return { adcode: d.geocodes[0].adcode };
		}
	} catch (e) {
		console.log("[getDiaryMeta] 地理编码失败：", e);
	}
	return null;
}

async function fetchWeather(adcode, place) {
	const tries = [];
	if (adcode) tries.push(String(adcode));
	if (place) tries.push(place);

	for (const c of tries) {
		try {
			const d = await getJSON(
				`https://restapi.amap.com/v3/weather/weatherInfo?key=${GAODE_KEY}&city=${encodeURIComponent(
					c
				)}&extensions=all&output=json`
			);
			if (d.status === "1" && d.forecasts && d.forecasts.length) {
				const cast = d.forecasts[0].casts[0];
				return `${cast.dayweather}/${cast.nightweather} ${cast.nighttemp}~${cast.daytemp}℃`;
			}
			console.log(`[getDiaryMeta] 天气 ${c} 失败：${d.info || ""} ${d.infocode || ""}`);
		} catch (e) {
			console.log(`[getDiaryMeta] 天气 ${c} 异常：`, e);
		}
	}
	return "";
}

async function fetchLunar(tp) {
	try {
		const apiDate = tp.date.now("YYYY-M-D");
		const res = await request({
			url: `http://v.juhe.cn/calendar/day?date=${apiDate}&key=${JUHE_KEY}`,
			method: "GET",
		});
		const data = JSON.parse(res);
		if (data.error_code === 0 && data.result) return data.result.data.lunar || "无法获取农历日期";
	} catch (e) {
		console.error("[getDiaryMeta] 农历失败：", e);
	}
	return "获取失败";
}

// ── 主函数 ────────────────────────────────────────────────

module.exports = async (tp, config = {}) => {
	const { location: cfgLocation = "", adcode: cfgAdcode = "", weather: cfgWeather = "" } = config;

	const cache = makeCache();
	const cached = cache.read() || {};

	let place = cfgLocation;
	let adcode = cfgAdcode;
	let weather = cfgWeather;

	if (!place) {
		// 1) Windows 精确定位
		const win = locateByWindows();
		if (win) {
			const g = await regeo(win.lat, win.lon);
			if (g && g.place) {
				place = g.place;
				adcode = g.adcode;
				console.log(`[getDiaryMeta] Windows 定位：${g.formatted} (${g.adcode})`);
			}
		}

		// 2) ipinfo 经纬度
		if (!place) {
			const ip = await locateByIPInfo();
			if (ip) {
				const g = await regeo(ip.lat, ip.lon);
				if (g && g.place && !SUSPECT_IP_CITIES.includes(g.city)) {
					place = g.place;
					adcode = g.adcode;
					console.log(`[getDiaryMeta] ipinfo 定位：${g.formatted} (${g.adcode})`);
				}
			}
		}

		// 3) 高德 IP
		if (!place) {
			const a = await locateByAmapIP();
			if (a && !SUSPECT_IP_CITIES.includes(a.city)) {
				place = a.place;
				adcode = a.adcode;
				console.log(`[getDiaryMeta] 高德 IP 定位：${a.place}`);
			}
		}

		// 4) 缓存 / 兜底
		if (!place) {
			place = cached.place || cached.city || FALLBACK_CITY;
			adcode = cached.adcode || "";
			console.log(`[getDiaryMeta] 定位失败，用 ${place}`);
		}

		cache.write({ place, adcode, at: new Date().toISOString() });
	}

	if (!adcode && place) {
		const geo = await geocode(place);
		if (geo) adcode = geo.adcode;
	}

	if (!weather) {
		weather = (await fetchWeather(adcode, place)) || "天气暂不可用";
	}

	const lunarDate = await fetchLunar(tp);

	return { location: place, weather, lunarDate };
};
