---
<%*
const config = { location: adcode: "", weather: "" };
const meta = await tp.user.getDiaryMeta(tp, config);
const quarter = Math.ceil((new Date().getMonth() + 1) / 3);
%>
tags: - 日记/季记
title: "季记 · <% tp.date.now("YYYY年") %>第<% quarter %>季度"
type: - 日记 - 季记
季度: <% tp.date.now("YYYY年") %>第<% quarter %>季度
创建时间: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
修改时间: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
作者: <% tp.system.prompt("输入季记作者") %>
本季度核心主题: <% tp.system.suggester(["蓄力","爆发","调整","复盘","转型","稳定"],["⚡","🔥","🔄","📊","🔀","🛡️"],true,'本季度核心主题') %>
aliases: - 季记-<% tp.date.now("YYYY年") %>第<% quarter %>季度
---
# 季记 · <% tp.date.now("YYYY年") %>第<% quarter %>季度
## 一、本季度概览
> 一句话总结本季度状态：__________

## 二、本季度关键数据
| 项目 | 本季度情况 | 对比上季度变化 | 
|--------------|------------|----------------| 
| 计划执行率 | ___ % | ↑/↓ ___ % | 
| 学习/工作总时长 | ___ h | ↑/↓ ___ h | 
| 核心项目进度 | ___ % | ↑/↓ ___ % | 
| 情绪波动均值 | ___ /10 | ↑/↓ ___ 分 |

## 三、本季度高光与突破 ✨
1. 里程碑事件：__________ 
2. 能力/认知上的跃迁：__________ 
3. 最有价值的成果：__________

## 四、本季度卡点与反思 💡
1. 影响进度的核心障碍：__________ 
2. 计划与现实的差距：__________ 
3. 可复用的经验/踩过的坑：__________

## 五、下季度规划 🎯
1. 核心目标（不超过 3 个）：__________ 
2. 关键行动与拆解：__________ 
3. 风险预判与应对：__________




