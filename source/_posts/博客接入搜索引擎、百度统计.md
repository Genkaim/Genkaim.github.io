---
title: 博客接入搜索引擎、百度统计
tags: 教程
description: 如何让博客接入搜索引擎、百度统计？ |Genkaim的博客
cover: 'https://raw.githubusercontent.com/Genkaim/blog_img/refs/heads/main/data/202309230802993.jpg'
abbrlink: 72dcbf6a
date: 2023-07-23 07:54:26
---


## 😉接入百度统计(Gridea)

按图示操作

![Snipaste_2023-06-17_17-02-50](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221459568.png)

 如果你的theme直接支持百度统计，那么只需要把图中圈出的部分复制进对应位置并保存就行了

![Snipaste_2023-06-17_16-54-20](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221459861.png)

![Snipaste_2023-06-17_16-53-04](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221500037.png)

如果theme不支持百度统计，那么还需要在前文提到的`head.ejs`加入百度提供的代码：

![Snipaste_2023-06-17_16-59-01](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221500572.png)

验证后出现图示就成功了🥳🥳🥳

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221500857.png" alt="Snipaste_2023-06-17_17-22-57" height="40%" width="40%" />


## 搜索引擎索引

### 😶在Bing Webmaster Tools加入自己的网站

进入网站：👉 [https://www.bing.com/webmasters/](https://www.bing.com/webmasters/)

你会看到如下页面：

键入自己的网址，通常是`https://<你的用户名>.github.io/`

![1](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221454530.png)

然后复制箭头所指的位置的<meta>标记，将它复制到站点原文件夹下的

`./themes/<当前选择的主题>/templates/includes(或者_blocks)/head.ejs`文件内（如图）

<small>只要在一坨<meta......>之间换行并复制就行了</small>

最好顺便把这条也一并复制进去，利于让bing抓取。

//标记网站适用的语言

```html
<meta http-equiv='content-language' content='zh_cn'>
```



![Snipaste_2023-06-17_16-10-21](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221455655.png)

![微信图片_20230617161808](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221455125.png)

**同步**后确认，就验证成功啦



### 😃创建网站地图

一个网站有很多网页，我们不可能一个个的去申请抓取，这太烦了~~悲~~

但是gridea本身并不支持生成网站地图，需要借助一个网页来完成：

👉[https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/)

输入网址后按图操作

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221455877.png" alt="Snipaste_2023-06-17_16-26-15" style="zoom:33%;" />

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221456464.png" alt="Snipaste_2023-06-17_16-26-40" style="zoom:33%;" />

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221456211.png" alt="Snipaste_2023-06-17_16-27-02" style="zoom: 33%;" />

接下来，将下载好的.xml文件放在 `./static`  下



### 😊上传网站地图

回到 👉[https://www.bing.com/webmasters/](https://www.bing.com/webmasters/)

在左侧侧边栏选择网站地图，并上传.xml文件

地址是`https://*<你的用户名>*.github.io/sitemap.xml`

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221456991.png" alt="Snipaste_2023-06-17_16-30-53" height="40%" width="40%"/>

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221456386.png" alt="Snipaste_2023-06-17_16-32-04" height="40%" width="40%" />



等待bing处理即可，如果你的网站符合要求就会被抓取（可能会有延时）



### 🤔查看是否被抓取

同样在侧边栏选择url检查，键入需要查询的地址就可以看到抓取状态

如果出现下图的状态，那么恭喜你，一次就成功了~~虽然不太可能~~

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221457615.png" alt="image-20230622145730437" style="zoom: 33%;" />

但如果出现下图的状态，需要点击实时url进一步查询

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221459471.png" alt="微信图片_20230617164208" style="zoom: 25%;" />

在这个页面可以看到网站的SEO问题，点击问题后

大致如图

![Snipaste_2023-06-17_16-47-56](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202306221458583.png)

大部分问题代码在前文提到的`head.ejs`可以解决，按照说明添加/删除代码即可

如果仅仅是SEO**提醒**，那么不用太在意，并不会影响抓取（比如图像的alt属性）

完成这些后只需要等待就行了🤗

附：SEO问题严重程度

>    错误：这些是我们在您的网站上发现的最关键的问题。您应优先解决这些问题，因为它们可能会影响您网站的可索引性。
>
>    警告：这些是中等严重性的问题，可能会影响您的SEO健康。
>
>    注意：这些是严重性最低的问题或建议，可以在解决所有错误和警告后进行调查。
