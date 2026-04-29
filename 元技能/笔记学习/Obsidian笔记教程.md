---
tags:
  - 笔记教程
  - Obsidian
aliases:
  - 黑曜石
  - Obsidian
cssclasses:
time: 2024-11-18T10:52:00
banner: "![[pixel-banner-images/Frost 2B (3).jpg]]"
---

<span style="background:#b1ffff"><font color="#76923c">笔记软件创建的库和文件是一一对应的，他不存储只是一个展示平台,其设置也本地化保存</font></span>
<span style="background:#b1ffff"><font color="#76923c">笔记属性 可以用三个—快速打出</font></span>

❕ <font color="#7030a0">星级代表重要度</font> ⭐️⭐️⭐️⭐️⭐
绿色--了解🟢
黄色--难点🟠️
红色--重点🔴

<aside>
<img src="https://www.notion.so/icons/question-mark_purple.svg" alt="https://www.notion.so/icons/question-mark_purple.svg" width="40px" /> <font color="#e36c09">总结问题</font>

</aside>

<aside>
<img src="https://www.notion.so/icons/drafts_purple.svg" alt="https://www.notion.so/icons/drafts_purple.svg" width="40px" /> <font color="#92d050">笔记正文</font>

</aside>
```table-of-contents
```

## 1— 界面介绍

命令面板快捷键<font color="##00b050">ctrl+p</font>
笔记属性
方便对笔记进行分类与查找
tags    标签
aliases   别名
cssclasses  美化

功能区域
	快速切换 输入标题 搜索查看
	关系图谱 笔记之间的连接关系
	命令面板 快速执行某些特定命令
	切换资料库
	帮助
	设置  快捷键ctrl+，号
	![image.png](https://obsidian-1332276919.cos.ap-guangzhou.myqcloud.com//obsidian202411271722301.png)



文件列表
	新建笔记
	新建文件
	排序
	也可以使用通配符搜索文件
	![文件列表](D:\个人知识体系\知识管理\笔记软件\笔记截图\文件列表截图.png)
笔记展示区域
	笔记标题
	内容支持Markdown语法
	![](https://obsidian-1332276919.cos.ap-guangzhou.myqcloud.com//obsidian202411271726190.png)

支持网页与文内跳转按住ctrl+鼠标左键
# 1 Markdown语法
## 1— 标题

数个“##”+ 空格 前置

 ## 一级标题  
 ## 二级标题  
 #### 三级标题  
 #### 四级标题  
 ###### 五级标题  
 ###### 六级标题

标题会在目录或大纲分级显示，可以跳转。

在typora中建议开启严格模式，即为## 标题不为##标题。应该要手动补上空格，使得markdown语法在其他文本编辑器上兼容

快捷键

- ctrl+数字1~6可以将选中文本个快速调成对应级别的标题
    
- ctrl+0 可以快速将对应标题调成对应文本
    
- ctrl+“+”或“-”号对标题进行加减
    

## 2— 字体显示

### 2.1— 粗体 「用“__”或“**”包围」

 **你好啊世界**  
 __你好啊世界__

**你好啊世界**

**你好啊世界**

### 2.2— 斜体「用“*”或“__”包围」

 *你好啊世界*  
 ——你好啊世界——

_你好啊世界_

_你好啊世界_

（斜体并强调「用“***”或“——”」包围）

_**你好啊世界**_

### 2.3— 删除线「用“~~”包围」

 ~~我是傻逼~~

~~我宣布个事，我是傻逼~~

### 2.4— *高亮「用“==”包围」

 ==世界在我手中==

==世界在我手中==

### 2.5— 下划线[用<u></u>包围]

 <U></U>

这是下划线啊

### 2.6— 字体快捷键

- **加粗 Ctrl+B**
    
- _斜体 ctrl+i_
    
- ~~删除线 Shift +Alt +5~~
    
- 下划线 Ctrl+U
    

### 2.7— 输入一些字符不显示 转义

转义字符\

## 3— 代码

### 3.1— 行内代码「用\`\`包围」

`sudo rm -rf`

### 3.2— 代码块

按下三个 \`  选择的编程语言 并回车

```java
代码块
```

## 4— 引用 「“>”+ 空格前置」

 > 25岁是学生啊  
 >> 啊啊啊啊啊啊啊啊啊

> 25岁是学生

> > 啊啊啊啊啊啊啊啊

引用是可以嵌套的

## 5— 列表

### 5.1— 无序列表「“-”或 “+”或“*”+ 空格前置」

快捷键ctrl+shift+]

 - 橘子花开  
 + 橘子花开  
 * 星号也可以

- 橘子花开
    
    - 橘子花开
        
    - 2
        
        - 列表
            

两种前置符都可以

敲回车后按下tab会自动缩进一级

### 5.2— 有序列表「数字 +“.”+空格前置」

快捷键ctrl+shift+[

 1. 一号  
 2. 二号  
 3. 三号

1. 鸟
    
2. 啊
    
3. 啊
    
    1. tab还是缩进
        

## 6— 上下标

### 6.1— 上标「用“^”包围」

 2^2^=4

22=4

### 6.2— 下标「用“~”包围」

 h~2~o 是剧毒的

h20是剧毒的

## 7— 注释「“[^]”后置」

 文本编辑神器typora 「^1」  
 ​  
 「^1」其实输入方案也重要

输入方案[^1]

[1]  虎码或五笔

Diana嘉然

[嘉然]  最甜甜甜甜的小草莓！

## 8— 链接[常用“[]”+“（）”分别包围文本与链接]

 [百度一下，你就完蛋]（https://www.baidu.com/?from=2001a）  
 [回到起点](## 标题)

支持网页与文内跳转按住ctrl+鼠标左键

[百度一下](https://www.baidu.com/?from=2001a)

[回到起点](##markdown)

[百度一下](https://www.baidu.com/?from=2001a)

[回到起点](##Obsidian) 
## 9— 任务列表[-空格[空格]空格]

 任务清单  
 -[ ] 绘画  
 -[x] 建模  
 -[ ] 编程

任务清单

- [ ] 

任务清单

- [ ]  绘画
- [ ] 建模
- [x]  编程

- [ ]
## 10— 表格[用“|”绘制表格边框]

 |学号|姓名|性别|  
 |001|根号三|男|

| 学号  | 姓名  |
| --- | --- |
| 001 | ♂   |
|     |     |
创建表格方式
1. 右键菜单 创建表格
2. 命令面板 insert table
## 11— 图片[拖拽或复制粘贴]


 ![图片](图片位置 "图片标题")
![记忆宫殿002](D:\360MoveData\Users\27967\Desktop\typora图片\记忆宫殿002.png "这是图片标题")

图片
短竖线  | 图片大小  格式长度X宽度

## 12— 分割线[按三个“*”或者“-”或“__”并回车]

 ***  
 ---  
 ___

## 13— emoji表情 [":"前置]

 : sweat_smile

: sweat_smile [网站](https://emojipedia.org/zany-face)

🤪

: sweat_smile
## 14— 进阶教程

## 15— 内联html代码[用“<></>”包围]

 <u>这是html的下划线</u>

这是html的下划线

.md可以直接导出为一个网页

## 16— 内联latex公式[用“$”包围]

部分编译器不会识别部分符号

 $
a^n+b^n=c^n
$


## 17— 工作区
储存你的布局设计

![image-20241118161055516](C:/Users/27967/AppData/Roaming/Typora/typora-user-images/image-20241118161055516.png)

## 18— 标签

井号 标签名

一般建议在：最前面或文章结尾书写
精细的组合,不要全面的概括

点击搜索带此标签的所有文件

##笔记教程 

![[标签面板.png]]

借助于[[Obsidian笔记教程##3.2代码块]]
页面 中显示搜索结果
```query
Obsidian

```
## 19— 命令

快捷键<font color="##00b050">ctrl+p</font>
模板中可以使用{{特殊符号}} 完成某种功能
## 20— 图床
pic go

图床，可以理解为让图片在互联网中躺好的工具。
有了图床就能十分方便地在各种地方调用图片，极大便利写作。

# 2 双链
## 1— 🔗双向链接


中括号两下
<font color="##8064a2">选中内容</font> 英文状态下中括号两下

前面加上！号就是嵌入，显示链接的所有内容

>[!NOTE] 中括号内文本名后
加 # 可直接显示标题极其内容
加 ^ 可以直接显示某段内容
加 | 🔗的别名 预览时显示内容
加^^进行搜索

[[Notion]]
[[思维导图笔记]]
[[个人知识库]]
🔗入链/反向链接：谁引用了你
🔗出联：你引用了谁

查找  <font color="##00b050">快捷键：ctrl+f</font>
替换  <font color="##00b050">快捷键：ctrl+h</font>

复制
复制所有格式 <font color="##00b050">ctrl+v</font>
纯文本复制 <font color="##00b050">ctrl+shift+v</font> 

# 3 模板

结构相同，内容不同

通配占位符

1. 创建文件夹
2. 设置模板设置
3. 在文件夹中创建笔记模板
4. 新建笔记，插入模板

# 4 插件
 1. Calendar 🗓插件
 2. FileExplorer Note Count 展示笔记数量
 3. Recent File 最近访问区域
 4. proxy github 无加速器，访问插件市场
 5. Outliner 更强大的大纲视图
 6. Mindmap 思维导图展现大纲
 7. Calendar 为日记提供日历视图
 8. Tasks 在Obsidian中管理待办事项。
 9. Obsidian memos    Obsidian中的Flomo，更优雅的记录灵感
 10. Excalidraw 在Obsidian中绘制流程图。
 11. quick explorer 隐藏左侧菜单，现实文件路径
 12. DataView 查询

# 5 搜索 查询
搜索：针对内容的查找
查询：针对属性的展示

## 1— 搜索


搜索快捷键 <font color="#00b050">ctrl+f</font>
搜索整个资料库：<font color="#00b050">Ctrl/Cmd+Shfift+F</font>

场景
什么时候使用搜索
* 条件单一
* 无需保存结果

![[笔记搜索截图.png]]

* 搜索技巧
	* 直接搜索关键词
	* 搜索包含多个关键词的文档（空格间隔）
	* 搜索包含某一个关键词的文档（OR)
	* 指定搜索范围
	* 搜索文件名file:
	* 搜索文本内容content:
	* 搜索标签tag:
	* 搜索同一行中的多个关键词line:word1word2
	* 搜索同一章节中的多个关键词section:word1word2
	* 搜索同一段落（块）中的多个关键词block:word1
* 搜索任务
	* 搜索任务task:""
	* 搜索未完成任务 task-todo:
	* 搜索已完成任务task-done:
* 保存查询结果
	* 代码 query

```query
obsidian
```

## 2— 查询 
需要借助插件

DataView
* 查询对象：Obsidian数据库
* 查询依据：YAML数据/Meatainfo

场景

什么时候使用**查询
* 条件复杂
* 需要保存结果

使用格式
```dataview
list
from "笔记学习"

```
三个\`创建代码块,语言为dataview

# 6 白板功能
白板

信息的可视化

鼠标中键移动位置
ctrl+滚轮调整大小

# 7 callout模块


> [!NOTE] 模块标题 你好世界
> 模块正文内容

> [!TIP] 背诵
> 需要背诵内容
> 

笔记补充
[Obsidian（黑曜石）软件基础操作教程](https://www.bilibili.com/video/BV1qD4y1m7nv/?spm_id_from=333.337.search-card.all.click)

