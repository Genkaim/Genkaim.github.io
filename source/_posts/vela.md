---
title: vela基础介绍
tags: Coding
abbrlink: 3f1ce327
date: 2023-12-1 10:40:00
cover: https://raw.gitmirror.com/genkaim/blog_img/main/data/202311041820746.jpg
---

![cover](https://raw.gitmirror.com/genkaim/blog_img/main/data/202311041820746.jpg)

最近摸索了一下小米vela快应用的编写，写个教程顺便做个归纳 ~~蹭个hyperOS的热度。~~

本文章使用初学者 ~~毕竟我也是。~~

## 概述

在介绍之前，需要了解一个vela app基本的架构。

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

   **package**: 包名，自己命名。

   **name**: app名称，会在手表上显示。

   **versionName**: 版本名称，自己命名。

   **minPlatformVersion**: 最低api版本。

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

   **features**： 调用的接口声明，有些敏感接口只有声明才可使用。

   **designWidth**： 设计稿的尺寸，具体看[页面样式与布局](https://iot.mi.com/vela/quickapp/zh/content/framework/style/page-style-and-layout.html)。

   **router**: app中每个页面的定义。

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

   在下面的代码中，会在app打开时和退出时分别 log “onCreate”和"onDestroy"。

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

3. `pages`下每个文件夹为当前页面的资源文件，包含`.ux`等等。

4. `i18n`语言文件。

5. `common`存放公用资源文件，比如logo。




### [生命周期](https://iot.mi.com/vela/quickapp/zh/content/framework/script/lifecycle.html?h=%E5%91%A8%E6%9C%9F)

这里借用一下官方的图。

简单来说，**app生命周期**就是当打开app时，一次进行下面步骤，页面onShow前，先经历onInit和onReady两个阶段（这在export default中是具体的两个函数）。

当app退出时，为onDestroy。

<img src="https://iot.mi.com/vela/quickapp/zh/content/images/life.png" alt="生命周期" style="width: 400px" />

### `ux`文件的基本认识

下面是一个简单的`.ux`文件的内容:

```ux
<template>
  <div class="page">
    <text class="title">确定要清除所有功德吗</text>
    <input class="yes" type="button" value="确认" onclick="clearData" />
    <input class="no" type="button" value="取消" onclick="goBack" />
  </div>
</template>

<script>
  import prompt from '@system.prompt'
  export default {
    goBack(event) {
      router.back()
    },
    clearData(event) {
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

1. **[template标签](https://iot.mi.com/vela/quickapp/zh/content/framework/template/basic.html?h=templATE)：** 类似于HTML的语言，vela提供多种[组件](https://iot.mi.com/vela/quickapp/zh/content/components/intro.html)。例如这里出现两种不同的组件：

​	text和input，分别会被渲染为文本块和按钮。

​	**其中：**

​		1.1 class为自己定义的类名type为组件类型，这里为按钮。

​		1.2 button标签的value值为按钮上显示的文字。

​		1.3 onclick为[事件](https://iot.mi.com/vela/quickapp/zh/content/components/general/events.html?h=%E4%BA%8B%E4%BB%B6)绑定，意思为满足”点按“这一条件时，会调用指定函数，函数在export default		定义。

>为什么要在template下再包一层div呢？
>
>因为template下只允许存在一个根节点，必须先创建一个节点，内部再放并列节点。

2. **[script脚本](https://iot.mi.com/vela/quickapp/zh/content/framework/script/basic.html?h=scri)：** 支持 ES5 / ES6 语法，这里的export default中，引用了一个模块来实现[返回](https://iot.mi.com/vela/quickapp/zh/content/features/basic/router.html?h=router)的功能。
3. **[style层叠样式表](https://iot.mi.com/vela/quickapp/zh/content/framework/style/page-style-and-layout.html?h=style)：**用选择器选择并设置属性即可。

## 简单示例：电子木鱼基本功能实现

### 基本功能：

1. 页面元素：电子木鱼（图片），显示功德数值功能，”功德+1“动画。

2. 实现点按木鱼计数功能。

<img src="https://www.bandbbs.cn/attachments/22569/" alt="muyu" style="width: 200px" />

页面资源：[单击下载](https://github.com/Genkaim/vela-apps/blob/main/wooden%20fish/src/pages/index/muyu.png)



### 页面布局

1. 放置木鱼图片可以用img组件或者css实现，这里使用的前者。

​	因为需要实现点按反馈的功能，所以需要绑定onclick事件。

```ux
      <img class="muyu" src="muyu.png" onclick="rpPlusPlus()" />
```

2. 计数功能可以通过text组件显示，这里注意，动态的数据（变量）可以通过大括号的方式显示，例如下面的代码可以实现显示功德计数（变量在下文）。

```ux
      <text class="cnt" >功德 {{localCnt}}</text>
```

3. 而动画的实现则是通过text组件+[if条件渲染](https://iot.mi.com/vela/quickapp/zh/content/framework/template/if.html?h=if)+绑定动画（下文）实现的。

>if条件渲染指if内表达式的值为true时，会渲染当前元素。

```ux
    <text if="{{plus}}" class="showPlus">功德+1</text>
```

### 脚本

1. 数据处理：

​	在上文中，需要几个变量：localCnt(int) 用于计数功德，plus(bool) 用于指示消息的显示。

​	定义变量需要这么写：

​	其中，

| 属性      | 类型   | 描述                                                         |
| --------- | ------ | ------------------------------------------------------------ |
| public    | Object | 页面级组件的数据模型，影响传入数据的覆盖机制：public 内定义的属性允许被传入的数据覆盖，如果外部传入数据的某个属性未被声明，在 public 中不会新增这个属性 |
| protected | Object | 页面级组件的数据模型，影响传入数据的覆盖机制：protected 内定义的属性，允许被应用内部页面请求传递的数据覆盖，不允许被应用外部请求传递的数据覆盖 |
| private   | Object | 页面级组件的数据模型，影响传入数据的覆盖机制：private 内定义的属性不允许被覆盖 |

```ux
  <script>
  export default {
    public: {
      localCnt: 0,
      plus: false
    }
  }
  </script>
```

2. 在上文中，需要定义rpPlusPlus函数，实现功德+1

​	其中：

​	通过this.Name访问当前页面数据对象。

​	并设置plus为true，在400ms后设置为false，即让其显示400ms，因为它绑定了动画（下文），看	起来的效果就是文字向上移动然后消失。

```ux
  rpPlusPlus(event) {
      this.plus = true;
      this.localCnt++;
      setTimeout(() => {
          this.plus = false;
      }, 400);
    }
```

### css

1. 绑定动画：

​	上文已经定义了class为showPlus，所以通过`.showPlus`选择元素：

```ux
 .showPlus {
    position: absolute;/*定位*/
    right: 70px;
    top: 210px;
    color: white;/*字体颜色*/
    font-weight: bold;/*字体粗细*/
    animation-name: moveUp;/*字体绑定动画*/
    animation-delay: 0s;/*动画延迟时间*/
    animation-duration: 200ms;/*动画持续时间*/
    animation-iteration-count: 1;/*动画持续次数*/
  }
  @keyframes moveUp {/*定义动画*/
    0% {
      transform: translateY(0);
    }
    99% {
      transform: translateY(-40px);
    }
    100% {
      visibility: hidden;
    }
  }

```

2. cnt、page和muyu元素：

```ux
 .muyu {
    position: absolute;/*定位*/
    height: 350px;
    top: 250px;
    background-color: transparent;/*背景颜色*/
    width: 450px;/*大小*/
  }
  .cnt {
    position: absolute;
    bottom: 100px;/*定位*/
    font-size: 70px;/*字体大小*/
    color: white;/*字体颜色*/
  }
   .page {
    background-color: black;/*背景颜色*/
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100%; /* 确保容器占满整个视窗 */
  }
```

完整代码：

```ux
<template>
  <div class="page">
    <img class="muyu" src="muyu.png" onclick="rpPlusPlus()" />
    <text if="{{plus}}" class="showPlus">功德+1</text>
    <text class="cnt" >功德 {{localCnt}}</text>
  </div>
</template>

<script>
  export default {
    public: {
      localCnt: 0,
      plus: false
    },
  rpPlusPlus(event) {
      this.plus = true;
      this.localCnt++;
      setTimeout(() => {
          this.plus = false;
      }, 400);
    }
  }
</script>

<style>
   .page {
    background-color: black;/*背景颜色*/
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100%; /* 确保容器占满整个视窗 */
  }
 .showPlus {
    position: absolute;/*定位*/
    right: 70px;
    top: 210px;
    color: white;/*字体颜色*/
    font-weight: bold;/*字体粗细*/
    animation-name: moveUp;/*字体绑定动画*/
    animation-delay: 0s;/*动画延迟时间*/
    animation-duration: 200ms;/*动画持续时间*/
    animation-iteration-count: 1;/*动画持续次数*/
  }
  @keyframes moveUp {/*定义动画*/
    0% {
      transform: translateY(0);
    }
    99% {
      transform: translateY(-40px);
    }
    100% {
      visibility: hidden;
    }
  }
  .muyu {
    position: absolute;/*定位*/
    height: 350px;
    top: 250px;
    background-color: transparent;/*背景颜色*/
    width: 450px;/*大小*/
  }
  .cnt {
    font-size: 70px;/*字体大小*/
    bottom: 100px;/*定位*/
    position: absolute;
    color: white;
  }
</style>

```

如有错误，欢迎指出。
