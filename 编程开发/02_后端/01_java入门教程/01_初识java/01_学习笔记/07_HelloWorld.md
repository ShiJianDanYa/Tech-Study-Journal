---
title: HelloWorld
tags:
  - java
  - HelloWorld
date: 2026-02-10
创建时间: 2026-02-10 18:42:41
修改时间: 2026-02-10 18:42:41
星期: 星期二
banner: "![[pixel-banner-images/冰雪2b (5).jpg]]"
banner-height: 1260
---

## 1— 需要解决问题
在java中，输出信息
## 2— 本质 意义 解决方法
### 2.1— 步骤
1. 编写
2. 编译  <font color="#ff0000">javac 文件名.java</font> (会产生 <font color="#ff0000">同名.class 文件</font>)
3. 运行  <font color="#ff0000">java 文件名</font>（注意这里<font color="#ff0000">不需要后缀</font>）
截图
![[HelloWorld_2026-03-30_22-58-09.png]]

```java
package com.itheima.test;  
//IDEA自动成，package 是个关键字，表示当前类所属的包，便于组织代码。  
  
/**  
 * ClassName: HelloWorld * Package: com.itheima.test * Description: * * @Author:锏澹  
 * @Create: 2026/4/2 - 19:40  
 * @Version: v1.0  
 * */  
//class：定义一个类，后面跟随类名  
//HelloWorld：类的名字，通常与文件名一致  
//{}：类的范围，所有代码都需要写在这对大括号中  
public class HelloWorld {  
  // 程序的主入口 (main 方法)  
  //程序运行时会从这个入口点开始执行代码  
  // 快速生成方式：psvm  
  public static void main(String[] args) {  
  //输出语句  
  //作用：将小括号中的内容打印到控制台  
  // 快速生成方式：sout  
   System.out.println("Hello World");  
        }  
}
```

运行结果
![[运行结果_2026-04-12_22-26-06.png]]

### 2.2— 常见问题
bug 
1. 识别
2. 分析
3. 解决

问题
* 英文符号
* 字母大小写
## 3— 注意事项
1. 编译  将代码翻译为计算机认识的文件（字节码文件）javac 文件名.java 会产生 同名.class 文件
2. 运行 java 文件名（不需要后缀）
## 4— 知识扩展
🈚️