---
title: 解决鸿蒙(HarmonyOS)设备安装谷歌套件时出现的签名不一致/有更高版本/设备未认证的情况
tags: 教程
cover: 'https://raw.gitmirror.com/genkaim/blog_img/main/data/202311041820746.jpg'
abbrlink: 9137adb2
date: 2024-04-20 19:48:33
---

![father](https://raw.gitmirror.com/genkaim/blog_img/main/data/202311041820746.jpg)

~~这篇文章好像有点水（证明我还活着~~ 

## Part1 
最近捣鼓harmonyOS装gms的时候发现，可能会出现签名不一致/系统有更高版本的从而无法安装的情况。 `华*套*` 里写只能重置设备，然而实际上只要用adb卸载相应app就可以了。~~（也许是系统自己卸载的不完全？~~

> 附常见包名：
>
> Google Play: com.android.vending
>
> Google Services Framework: com.google.android.gsf
>
> Google Play Service: com.google.android.gms

## Part2
如果出现设备未认证该怎么办呢？网上的教程都是在[https://www.google.com/android/uncertified/](https://www.google.com/android/uncertified/)

填入[DeviceID](https://link.zhihu.com/?target=http%3A//cdn.cheshirex.com/data/DeviceID.apk)查到的GSF ID，然而大部分情况下，后面弹窗不会消失，还需要以下额外步骤

> 图片来自 [https://zhuanlan.zhihu.com/p/54031537](https://zhuanlan.zhihu.com/p/54031537)

<img src="https://pic2.zhimg.com/80/v2-0a826105134fd39555587df6105c19c5_720w.webp" alt="img" style="zoom:50%;" />

> 以下图片来自 [https://blog.csdn.net/Eric_Eric__/article/details/135843571](https://blog.csdn.net/Eric_Eric__/article/details/135843571)

1. 点击设置-应用-应用启动管理-右上角四点"∷"-显示系统程序-搜索框输入"google"，将Google服务框架、Google Play服务、Google Play商店自动管理关闭，勾选手动管理中的三个选项(允许自启动、允许关联启动、允许后台启动

<img src="https://img-blog.csdnimg.cn/direct/f4eb72c1c5354b61875dc321d01eb5e2.png" alt="img" style="zoom:50%;" />

1. 关闭WIFI与移动数据，点击设置-应用-应用管理-右上角四点"∷"-显示系统程序-搜索框输入"google"，将Google服务框架强行停止并删除数据，将Google Play服务强行停止并清空缓存(不要点管理空间里的清除所有数据)，将Google Play商店强行停止并删除数据。

<img src="https://img-blog.csdnimg.cn/direct/927100471d984adfa95acaf408a21040.png" alt="img" style="zoom: 67%;" />

3. 重启手机，保持断网状态，开机后等待30秒。

4. 在设置-应用-应用管理的Google Play服务中点击存储-管理空间-清除所有数据。

   <img src="https://img-blog.csdnimg.cn/direct/ba20087ee7584eeaa04b0cd0260cd0b9.png" alt="img" style="zoom: 50%;" />


5. 重启手机，开机后打开WIFI或移动数据。
6. 打开Google Play商店。