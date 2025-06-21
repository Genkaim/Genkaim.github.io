---
title: 在xLog托管博客
tags: 教程
abbrlink: 6b13026f
date: 2023-08-20 16:15:21
description: 在xLog托管你的博客|教程|genkaimの博客
swiper_index: 4
cover: https://raw.gitmirror.com/genkaim/blog_img/main/data/2021021012571650539.jpg
---




## 介绍

[xLog](https://xlog.app/about) 是一个基于Web3、区块链的在线博客平台。

## 注册钱包

**注意**xLog完全开源，如果你对于“钱包”二字敏感，可以自行查阅它在github上的仓库。并且，你在xLog上的更新也是以交易的形式完成的，每次更改都需要你在钱包输入密码确认，**但不会实际产生现实钱币数量的更改(仅限在xLog上的交易)**。

如果你从未接触过，那么打开[xLog](https://xlog.app/about)，在右上角找到连接，选择你喜欢的钱包（我用的是[Coinbase Wallet](https://www.coinbase.com)），找到它的官网，下载APP，按照软件的提示操作，然后选择你注册的钱包登录。

<img src="https://raw.gitmirror.com/genkaim/blog_img/main/data/image-20230820162003780.png" alt="image-20230820162003780" height =40% width=40% />

## 开始写作

如图：

xLog支持文章、作品集、页面三个发布方式。

文章支持mardown格式，注意**Latex公式需要套两个$$**，页面同理，作品集支持发布其他平台的作品放入，并自动抓取信息，单击即可跳转。

<img src="https://raw.gitmirror.com/genkaim/blog_img/main/data/image-20230820164450362.png" alt="image-20230820164450362" height =25% width=25% />

## 自定义你的博客

xLog支持引入css在仪表盘的设置->自定义css即可添加代码。

下面附上我的css代码，[效果预览](https://genkaim.xlog.app)，它基于[@birdgg分享的css](https://birdgg.me/xlog-cutom-css)

可以试试两个代码，哪个更合你的口味（

我修改的主要有：

1. 更改鼠标指针
2. 更改标题字体
3. 删除暗色模式下文章部分阴影

```css
@import url("https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/lxgwwenkaiscreenr.css");

@font-face {
  font-family: 'Candyshop';
  src: url(https://ipfs.4everland.xyz/ipfs/bafkreiaztv4ex5zlllmz5jqkrc3uouggdwfy6rrenemtdf3erlbd6bmfwm);
  font-display: swap;
}

:root {
  --theme-color: #f7e78e !important;
  --font-fans: 'SF Compact Rounded', 'PingFang SC', 'Microsoft YaHei', Lato, sans-serif;
  --header-height: max(50vh, 450px);
  --grey-0: #fff;
  --grey-1: #fdfdfd;
  --grey-2: #f7f7f7;
  --grey-3: #eff2f3;
  --grey-4: #ccc;
  --grey-5: #999;
  --grey-6: #666;
  --grey-7: #333;
  --grey-8: #222;
  --grey-9: #000;
  --grey-1-a0: rgba(253, 253, 253, 0);
  --grey-1-a7: rgba(253, 253, 253, .7);
  --grey-1-a5: rgba(253, 253, 253, .5);
  --grey-1-a3: rgba(253, 253, 253, .3);
  --grey-9-a1: rgba(0, 0, 0, .1);
  --grey-9-a5: rgba(0, 0, 0, .5);
  --grey-2-a0: rgba(247, 247, 247, 0);
  --color-pink-light: #ffe6fa;
  --color-cyan-light: #e3fdf5;
  --color-red: #e9546b;
  --color-pink: #ed6ea0;
  --color-orange: #ec8c69;
  --color-yellow: #eab700;
  --color-green: #0a7426;
  --color-aqua: #3e999f;
  --color-blue: #38a1db;
  --color-purple: #9d5b8b;
  --color-grey: #869194;
  --color-red-a1: rgba(233, 84, 107, .1);
  --color-red-a3: rgba(233, 84, 107, .3);
  --color-pink-a3: rgba(237, 110, 160, .3);
  --color-pink-light-a3: rgba(255, 230, 250, .3);
  --color-pink-light-a5: rgba(255, 230, 250, .5);
  --color-pink-light-a7: rgba(255, 230, 250, .7);
  --body-bg-shadow: var(--grey-2);
  --box-bg-shadow: var(--grey-9-a1);
  --text-color: var(--grey-7);
  --header-text-color: var(--grey-0);
/*  cursor: url('https://img2.birdgg.me/iku-cursor.png') 0 0, auto;*/
}

html.dark {
  --grey-0: #222;
  --grey-1: #21252b;
  --grey-2: #363636;
  --grey-3: #444;
  --grey-4: #666;
  --grey-5: #aaa;
  --grey-6: #ccc;
  --grey-7: #ddd;
  --grey-8: #eee;
  --grey-9: #f7f7f7;
  --grey-1-a7: rgba(34, 34, 34, .7);
  --grey-1-a5: rgba(34, 34, 34, .5);
  --grey-1-a3: rgba(34, 34, 34, .3);
  --grey-1-a0: rgba(34, 34, 34, 0);
  --grey-9-a1: rgba(51, 51, 51, .1);
  --grey-2-a0: rgba(54, 54, 54, 0);
  --color-pink-light: #322d31;
  --color-cyan-light: #2d3230;
  --color-red: rgba(237, 118, 137, .9);
  --color-pink: rgba(241, 139, 179, .8);
  --color-orange: rgba(240, 163, 135, .8);
  --color-yellow: #ffe175;
  --color-green: #86c59d;
  --color-aqua: #97d3d6;
  --color-blue: #9cd0ed;
  --color-purple: #cfacc5;
  --color-grey: #c3c8ca;
  --body-bg-shadow: #000;
  --box-bg-shadow: #000;
  --text-color: var(--grey-5);
  --header-text-color: var(--grey-9);
}

.xlog-page {
  background: linear-gradient(to top, var(--body-bg-shadow) 0, var(--grey-1) 20%) no-repeat bottom;
}

.xlog-page .max-w-screen-md {
  max-width: 1000px;
}

.xlog-header {
  position: sticky;
  height: 400px;
  top: -360px;
  z-index: 1;
  border: none;
  background-color: var(--grey-1)
}

.xlog-header .flex.py-12.w-full {
  width: 80%;
  justify-content: center;
}

.xlog-header .xlog-banner {
  height: calc(100% - 40px)
}

.xlog-header .xlog-banner img[alt=banner] {
  width: 100%;
  max-width: unset;
  filter: none /*blur(5px) brightness(75%)*/
}

@media (width > 1024px) {
  .xlog-page-index .xlog-header {
    height: 100vh;
    top: calc(40px - 100vh);
  }
}

.xlog-page-index,
.xlog-page-post {
  font-family: "LXGW WenKai Screen R", sans-serif;
}

main {
  max-width: 1000px !important;
  background: none ;/*linear-gradient(to top, var(--grey-0) 0, var(--grey-1) 20%) no-repeat top;*/
  box-shadow: none; /*0 1.25rem 1rem 0.3125rem var(--body-bg-shadow);*/
  padding-bottom: 2rem;
}

.xlog-header .text-gray-500 {
  color: white !important;
  text-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, .5);
}
/**/
/* post */
.prose :not(pre)>code {
  color: var(--theme-color);
    border-radius: 0.3rem;
    border: 0.0625rem solid rgba(0,0,0,.1);
    background-color: var(--grey-0);
    padding: 0.2rem 0.3rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
}
.prose blockquote {
  border-radius: 0.1875rem;
  padding: .625rem 1.25rem;
  border-left: 0.25rem solid var(--theme-color);
  font-size: 90%;
  background-color: var(--grey-2);
  margin: 1.25rem 0;
}

.prose ol {
  counter-reset: counter;
}

.prose li {
  list-style: none;
  position: relative;
}

.prose ol li:before {
  counter-increment: counter;
  content: counter(counter);
  position: absolute;
  width: 1.4em;
  height: 1.4em;
  border-radius: 50%;
  text-align: center;
  font-size: .8em;
  line-height: 1.4;
  top: 0.5em;
  left: -1.8em;
  background: var(--theme-color);
  color: rgba(var(--tw-colors-i-gray-100), 1);
  cursor: pointer;
}

.prose ul li:before {
  content: "";
  position: absolute;
  width: 0.4em;
  height: 0.4em;
  background: var(--theme-color);
  border-radius: 50%;
  top: 0.85em;
  left: -1em;
}

.prose .table-wrapper {
  border: none !important;
  border-radius: 0 !important;
}

.prose table {
  border-collapse: collapse;
  border-spacing: 0;
  font-size: .875em;
  margin: 0 0 1.25rem;
  width: 100%;
  overflow: auto;
}

.prose table tbody tr:nth-child(2n-1) {
  background: none !important;
}

.prose table th,
td {
  border: 0.0625rem solid var(--border-color);
  border-bottom: 0.1875rem solid var(--border-color);
  padding: 0.5rem;
  padding-bottom: 0.625rem;
  text-align: left;
  vertical-align: middle;
}

.prose table th {
  font-weight: 700;
  text-align: center;
}

.prose table td {
  border-bottom-width: 0.0625rem;
}

.spoiler {
  filter: blur(8px);
  transition: filter .5s;
}

.spoiler:hover {
  filter: blur(0px);
}

.dark .info {
  --note-border: rgba(85, 98, 132, 0.8);
  --note-bg: rgba(48, 49, 50, 0.8);
  --note-text: rgba(109, 164, 219, 0.8);
  --note-hover: rgba(39, 127, 214, 0.8);
}

.info {
  --note-border: #8fa4dc;
  --note-bg: #f1f9ff;
  --note-text: #1d4974;
  --note-hover: #1d5fa0;
}

.note {
  background: var(--note-bg, var(--grey-2));
  color: var(--grey-6);
  border-left: 0.25rem solid var(--note-border, var(--grey-4));
  font-size: .875em;
  --primary-color: var(--note-text);
  border-radius: 0.1875rem;
  margin: 1rem 0;
  padding: 1rem;
  position: relative;
  padding-left: 1rem;
}

.dark .error {
  --note-border: rgba(146, 107, 115, 0.8);
  --note-bg: rgba(50, 48, 48, 0.8);
  --note-text: rgba(239, 38, 79, 0.8);
  --note-hover: rgba(168, 49, 72, 0.8);
}

.error {
  --note-border: #f4b3c1;
  --note-bg: #fff2f5;
  --note-text: #cc0f35;
  --note-hover: #f14668;
}

.dark .success {
  --note-border: rgba(97, 116, 88, 0.8);
  --note-bg: rgba(50, 50, 48, 0.8);
  --note-text: rgba(128, 200, 129, 0.8);
  --note-hover: rgba(41, 95, 42, 0.8);
}

.success {
  --note-border: #a3c293;
  --note-bg: #fcfff5;
  --note-text: #2c662d;
  --note-hover: #3b883c;
}

/* phone */

@media (max-width: 767px) {
  .xlog-post {
    flex-direction: column-reverse !important;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    max-height: -webkit-fit-content;
    max-height: -moz-fit-content;
    max-height: fit-content;
  }

  .xlog-post .xlog-post-cover {
    width: 100%;
    height: 14rem;
    margin: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    border-radius: 0.625rem 0.625rem 0 0;
  }

  .xlog-posts>.xlog-post:nth-child(even) .xlog-post-cover {
    width: 100%;
    margin: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    border-radius: 0.625rem 0.625rem 0 0;
  }

  .xlog-post>div:nth-of-type(1) {
    width: 100%;
    padding: 10px;
  }

  main {
    max-width: 500px;
  }
}

/**/

body {
  cursor:url(https://raw.gitmirror.com/genkaim/blog_pic/main/data/noramal_bl.cur),
        default;
}
a,
img {
  cursor:url(https://raw.gitmirror.com/genkaim/blog_pic/main/data/choose_bl.cur),
        default; 
}
```

