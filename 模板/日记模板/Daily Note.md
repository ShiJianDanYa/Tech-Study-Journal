
```text
<%*
const config = {
    location: "",  // 当前指定地理位置，会根据该位置获取对应天气。不指定则根据当前IP地址自动获取地址位置和天气信息。
    adcode: "",  // 若指定adcode，优先根据adcode获取该地理编码对应的天气
    weather: ""
};
const meta = await tp.user.getDiaryMeta(tp, config);
%>---
tags:
  - Topic/DailyNote
title: <% tp.file.title %>
type:
  - Daily Note
date: <% tp.date.now("YYYY-MM-DD") %>
created_time: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
modify_time: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
lunar_calendar: <% meta.lunarDate %>
week: <% tp.file.creation_date("dddd") %>
location: <% meta.location %>
weather: <% meta.weather %>
health: 
events: 
aliases:
  - Daily Note - <% tp.date.now("YYYY-MM-DD") %>
---
# Daily Note - <% tp.date.now("YYYY-MM-DD") %>
```
