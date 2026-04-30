---
<%*
const config = { adcode: "", weather: "" };
const meta = await tp.user.getDiaryMeta(tp, config);
%>

tags: - 日记/年记
title: "年记 · <% tp.date.now("YYYY年") %>"
type: - 日记 - 年记
年份: <% tp.date.now("YYYY年") %>
创建时间: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
修改时间: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm:ss") %>
作者: <% tp.system.prompt("输入年记作者") %>
年度核心主题: <% tp.system.suggester(["成长","蜕变","沉淀","突破","转折","稳定"],["🌱","🦋","📚","💥","🔀","🛡️"],true,'年度核心主题') %>
aliases: - 年记-<% tp.date.now("YYYY年") %>

---
# 年记 · <% tp.date.now("YYYY年") %>
## 一、年度概览

