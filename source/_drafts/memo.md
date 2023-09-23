---
title: memo
tags:
swiper_index: 1
top: 1
---

## tabs用法

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**可带图标**
<!-- endtab -->
{% endtabs %}

## 文字高亮


{% label 先帝 blue %}

## 时间线

{}年份；<>日期

{% timeline 2022,blue %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2023,blue %}
<!-- timeline 01-05 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

## tags-hide

### 隐藏词语

哪个英文字母最酷？ {% hideInline 因为西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人? {% hideInline 闪 %}

### 隐藏句子

查看答案
{% hideBlock 查看答案 %}
傻子，怎么可能有答案
{% endhideBlock %}

### 隐藏段落

{% hideToggle Update Log %}

{% endhideToggle %}

