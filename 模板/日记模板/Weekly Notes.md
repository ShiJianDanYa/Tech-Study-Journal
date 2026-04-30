---
<%*
const config = { location: "山东省肥城市安驾庄镇", adcode: "", weather: "" };
const meta = await tp.user.getDiaryMeta(tp, config); %>
tags: 
  - 日记
  - 周记
title: <% tp.file.title %>
type: 
  - 日记
  - 周记
日期范围: <% tp.date.weekday("YYYY-MM-DD", 0) %> ~ <% tp.date.weekday("YYYY-MM-DD", 6) %> 
创建时间: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %> 
修改时间: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %> 
作者: <% tp.system.prompt("输入周记作者") %> 
本周核心心情: <% tp.system.suggester(["充实","焦虑","平淡","成就感","疲惫","期待"],["😀","😰","😐","🥳","😫","🤩"],true,'本周核心心情') %> 
aliases:
  - 周记-<% tp.date.weekday("YYYY-MM-DD", 0) %>~<% tp.date.weekday("YYYY-MM-DD", 6) %>
---
# 周记 · <% tp.date.weekday("YYYY-MM-DD", 0) %> ~ <% tp.date.weekday("YYYY-MM-DD", 6) %>
> 一句话总结本周状态：__________

## 二、本周关键数据（复用你的每日格式）
| 项目 | 本周情况 | 对比上周变化 | 
|--------------|----------|--------------|
| 计划执行率 | ___ % | ↑/↓ ___ % | 
| 学习/工作时长 | ___ h | ↑/↓ ___ h | 
| 运动/健康次数 | ___ 次 | ↑/↓ ___ 次 | 
| 情绪波动均值 | ___ /10 | ↑/↓ ___ 分 |

## 三、本周高光时刻 ✨ 
1. 
2. 
3. 

## 四、本周卡点与反思 💡
1. 最困扰的事：__________ 
2. 没完成的原因：__________ 
3. 学到的教训：__________

## 五、下周计划 🎯
1. 核心目标：__________ 
2. 具体行动：__________ 
3. 风险预案：__________