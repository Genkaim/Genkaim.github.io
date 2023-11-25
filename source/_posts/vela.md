---
title: vela基础介绍
tags: Coding
abbrlink: 3f1ce327
date: 2023-11-10 20:14:53
---



最近摸索了一下小米vela快应用的编写，写个教程顺便做个归纳 ~~蹭个hyperOS的热度~~

本文章使用初学者 ~~毕竟我也是~~

## 概述

[vela官方文档](https://iot.mi.com/vela/quickapp/zh/content/intro.html)的[案例](https://iot.mi.com/vela/quickapp/zh/content/guide/start.html)已经写的很清楚了。

不同的，本文章以**生命周期**为基本架构介绍vela快应用的开发。

在介绍之前，需要了解一个vela app基本的架构

### [项目结构](https://iot.mi.com/vela/quickapp/zh/content/framework/project-structure.html)

基本架构：

```
├── manifest.json
├── app.ux
├── pages
│   ├── index
|   |   ├── index.ux
|   |   ├── index.css
|   |   └── index.js
│   └── detail
|       ├── detail.ux
|       ├── detail.css
|       └── detail.js
├── i18n
|   ├── defaults.json
|   ├── zh-CN.json
|   └── en-US.json
└── common
    ├── style.css
    ├── utils.js
    └── logo.png
```

其中，

1. `manifest.json`记录app的基本信息

   例如以下属性依次是：

   **package**: 包名，自己取的

   **name**: app名称，会在手表上显示

   **versionName**: 版本名称，自己取

   **minPlatformVersion**: 最低api版本

   **icon**: 图标文件路径

   {% hideToggle 资源和文件访问规则 %}

   **<big> 资源和文件访问规则 </big>**

   应用资源路径分为绝对路径和相对路径，以"/"开头的路径表示绝对路径，比如 /common/a.png，不以"/"开头的路径是相对路径，比如 a.png 和 ../common/a.png 等。

   应用资源文件分为代码文件和资源文件，代码文件是指 .js/.css/.ux 等包含代码的文件，其他文件则是资源文件，这类文件一般只当作数据来使用，比如图片、视频等。

   1. 在代码文件中，导入其他代码文件时，使用相对路径，比如：../common/component.ux；
   2. 在代码文件中，引用资源文件(如：图片、视频等)时，一般情况下使用相对路径，比如： ./abc.png；
   3. 当代码文件需要被导入时，如果导入文件与被导入文件在同一个目录，被导入文件引用资源文件时可以使用相对路径，但如果不在同一目录，必须使用绝对路径，因为被导入文件编译时会被复制到导入文件中，编译后目录会发生变化。比如 a.css 文件被 b.ux 导入，如果 a.css 与 b.ux 在同一个目录，a.css  引用资源文件时可以写相对路径：abc.png，如果不在同一个目录，必须写绝对路径：/common/abc.png，再比如当 a.ux 文件被  b.ux 文件导入时，如果 a.ux 与 b.ux 在同一个目录，a.ux  引用资源文件时可以写相对路径：a.png，如果不在同一个目录，a.ux 引用资源必须写绝对路径：/common/abc.png；
   4. 在 CSS 中，与前端开发一致，使用 url(PATH)的方式访问资源文件，如：url(/common/abc.png)。 

   {% endhideToggle %}

   **features**： 调用的接口声明，有些敏感接口只有声明才可使用

   **designWidth**： 设计稿的尺寸，具体看[页面样式与布局](https://iot.mi.com/vela/quickapp/zh/content/framework/style/page-style-and-layout.html)

   **router**: app中每个页面的定义

   ```
   {
     "package": "com.genkaim.muyu",
     "name": "电子木鱼",
     "versionName": "1.1.0",
     "versionCode": 4,
     "minPlatformVersion": 1000,
     "icon": "/common/logo.png",
     "deviceTypeList": [
       "watch"
     ],
     "features": [
       { "name": "system.storage" },
       { "name": "system.file" },
       { "name": "system.prompt" },
       { "name": "system.vibrator" }
     ],
     "config": {
       "logLevel": "log",
       "designWidth": 600 
     },
     "router": {
       "entry": "pages/index",
       "pages": {
         "pages/index": {
           "component": "index"
         },
         "pages/settings": {
           "component": "settings"
         },
         "pages/confirm": {
           "component": "confirm"
         },
         "pages/about": {
           "component": "about"
         }
       }
     }
   }
   ```

   

2. `app.ux`为app基本的js语法例如生命周期中，app的onCreate、onDestroy在这调用

   在下面的代码中，会在app打开时和退出时分别 log “onCreate”和"onDestroy"

   ```javascript
   <script>
   export default {
     data: {
         a: 1
     },
     onCreate() { 
   	console.log("onCreate")
     },
     onDestroy() {
      	console.log("onDestroy")
     }
   }
   </script>
   
   ```

3. `pages`下每个文件夹为当前页面的资源文件，包含`.ux`等等

4. `i18n`语言文件

5. `common`存放公用资源文件，比如logo

### `ux`文件的基本认识

下面是一个简单的`.ux`文件的内容:

```javascript
<template>
  <div class="page">
    <!-- <input class="back" type="button" onclick="goBack" /> -->
    <text class="title">确定要清除所有功德吗</text>
    <input class="yes" type="button" value="确认" onclick="clearData" />
    <input class="no" type="button" value="取消" onclick="goBack" />
  </div>
</template>

<script>
  import router from '@system.router'
  import prompt from '@system.prompt'  //弹窗模块
  export default {
    goBack(event) {
      router.back()
    },
    clearData(event) {
      this.$app.$def.data.rpCount = 0;
      this.$app.$def.data.nrpCount = 0;
      router.back()
    }
  }
</script>

<style>
.yes, .no {
  width: 500px;
  height: 150px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-top: 60px;
}
.page {
  position: absolute;
  background-color: black;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.back {
  position: absolute;
  left: 0px;
  top: 10px;
  background-color: black;
  color: white;
  font-size: 80px;
  font-weight: bold;
  background-image: url('/common/icon-back.png');
}
.yes {
  margin-top: 50px;
  background-color: rgb(44, 44, 44);
}
.no {
  margin-top: 30px;
}
.title {
  color: white;
  font-size: 50px;
  font-weight: bold;
  top: 5px;
}
</style>

```



## [生命周期](https://iot.mi.com/vela/quickapp/zh/content/framework/script/lifecycle.html?h=%E5%91%A8%E6%9C%9F)

这里借用一下官方的图。

简单来说，**app生命周期**就是当打开app时，一次进行下面步骤，页面onShow前，先经历onInit和onReady两个阶段（这在export default中是具体的两个函数）。

当app退出时，为onDestroy。

<img src="https://iot.mi.com/vela/quickapp/zh/content/images/life.png" alt="生命周期" style="width: 500px;" />

