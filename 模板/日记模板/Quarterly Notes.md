---
<%*
const config = {
  adcode: "",
  weather: ""
}; 
 const meta = await tp.user.getDiaryMeta(tp, config);
%>
 ---

tags:
  - 日记/季记
title: "季记 · <% tp.date.now("YYYY年") %>第<% Math.ceil(tp.date.now("M")/3) %>季度"