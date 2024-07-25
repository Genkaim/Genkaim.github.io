---
title: 快速破解seewo冰点还原
tags: 教程
abbrlink: 9d27b799
date: 2024-07-25 12:20:22
cover: https://raw.gitmirror.com/Genkaim/blog_img/main/data/202407251432348.webp
---

![cover](https://raw.gitmirror.com/Genkaim/blog_img/main/data/202407251432348.webp)

## 写在最前

 <big>**本文章只作技术交流之用，如果你的班主任要打你屁屁和我没关系捏**</big>

据说seewo管家新版本这个方法不适用，不过嘛，学校一般不太会更新软件，试试，万一成功了呢。~~反正我在浙江某末流985附属中学成功了~~

所需的文件：
1.[希沃管家1.1.9 ](https://www.123pan.com/s/Zk0Kjv-5kRx.html) 如果不想登录的话可以在[这里](https://www.iefans.net/soft/v1119124.html)下载
2.[MD5对照表 ](https://wwp.lanzoum.com/iU7uB0cc5i6j )密码:96os 

> 对照表来自 https://www.bilibili.com/video/BV1424y1R74A

## Summary

老版的seewo管家的密码加密算法十分简单，所以只需要用老版seewo管家覆盖安装新版的seewo管家，获取密码后再关闭冰点还原就可以了。**建议关闭后再安装回新版管家，有b友反馈反之会有无限重启的情况。**

## 安装老版seewo管家

1.**断网**后删除`C:\ProgramData\Seewo\SeewoCore\SeewoCore.ini`；

2.运行`C:\Program Files(x86)\Seewo\SeewoService\Uninstall.exe`卸载seewo管家
**密码000000** 不过似乎没有密码也能卸载；

![image-20240725142119275](https://raw.gitmirror.com/Genkaim/blog_img/main/data/202407251421627.png)

3.安装1.1.9版本的seewo管家。

**此时不要重启**

## 获取密码

1.显示学校名称后，打开`C:\ProgramData\Seewo\SeewoCore\SeewoCore.ini`记录下`PASSWORD`；

![image-20240725141307223](https://raw.gitmirror.com/Genkaim/blog_img/main/data/202407251413911.png)

2.把`PASSWORD`转换成明文，成功查看到密码；

>用表格或一下两个网站转换
>https://www.cmd5.com/
>http://www.ttmd5.com/hash.php?type=0

3.关闭冰点还原后确认重启。