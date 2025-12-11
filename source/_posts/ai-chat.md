---
title: 在博客里接入AI机器人(Chatgpt)，并且读取博客文章
tags: AI
description: 在你的博客里接入AI机器人，并且读取你的文章|genkaimの博客|这次借助的是chat thing 网站，免费版支持gpt-3
cover: 'https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308092059559.jpg'
abbrlink: add30ed0
date: 2023-08-09 20:29:03
---
## 起因

我看到[endercat](https://endercat.eu.org)的这篇[文章](https://endercat.ir/zai-bo-ke-shang-qian-ru-ke-yi-du-qu-wen-zhang-de-ChatGPT)，起了往博客添加机器人的想法，但是期望是以悬浮窗的形式，就到处寻找，终于！！！找到了   
~~实际上是我太菜不会加悬浮窗（）~~

## 😆创建机器人New bot

这次借助的是[Chat Thing](https://chatthing.ai/) 网站，免费版支持gpt-3

1. 进入后注册登录，然后会看到仪表盘。
2. 创建机器人，注意免费版只能创建一个机器人。
2. 设置机器人的基础信息，注意催眠的地方在**Advanced settings**中最下面

![image-20230809203623323](https://raw.gitmirror.com/genkaim/blog_pic/main/data/image-20230809203623323.png)



## 🫤设置 Data source 数据来源

**注意免费版只能有一个数据来源**，但一般也够了

![image-20230809214044613](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308092140893.png)

有很多中不同方式，这里介绍两种方式：

1. Website：（因为可以用sitemap）如图，输入网址即可

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308092043992.png" alt="image-20230809204349728" width="50%" height="50%" />

2. RSS订阅：点击你的xlog主页的RSS按钮，复制新打开网页的网址到下图位置即可即可

   ![image-20230810085810825](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308100858296.png)

![image-20230810085956865](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308100859979.png)

<big>**注意要保存并同步数据源**</big>

![image-20230810090147307](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308100901485.png)

这样，数据源也设置好啦

## 🥰嵌入博客 Embed Bot

点开Embed Bot，参考下图翻译，选择你想要的方式插入就好了

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308092045929.png" alt="image-20230809204552761" width="50%" height="50%">

如果是插入文章/页面，那么很简单，直接在对应`.md`插入你看到的代码就好了。

如果想要全局小组件，直接在bottom引入：
```
<script src="https://chatthing.ai/chat-widget.js" type="text/javascript" id="<替换为你在小组件代码中看到的id(保留引号)>" async defer></script>
```
效果分别如图

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308092105044.png" alt="image-20230809210531921" width="30%" height="30%" />

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308092053443.png" alt="image-20230809205358309" width="80%" height="80%" />

这样就完成啦🥳

如有错误/改进，欢迎指正🥲
