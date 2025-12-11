---
title: 写都写了，发一下吧
date: 2025-12-11 22:15:24
tags: 教程
abbrlink: add30e99
---

$$
question:\qquad calculate \lim_{n\to\infty}\frac{\sqrt{1}+\sqrt{2}+...+\sqrt{n}}{n\sqrt{n}}
$$
先根据答案推过程：要求$\int_{0}^{1} \sqrt{n}$ . 已知其极限存在，根据定义等价于求下面这个图形的面积

<small>图床还没配置好，图先没了</small>

直观的，当小方块的数量趋近于无穷多时，小方块面积和就是$\sqrt{x},y=0,y=1$与x轴围成的面积，也就是$\int_{0}^{1} \sqrt{n}$.

那怎么求呢？为了方便的求，可以把[0,1] n等分，而不是随机分，这样每一个矩形的宽度就是$1/n$，高度可以取f(区间左端点)或者f(区间右端点)，因为当区间无穷小（n无穷大）时这俩没啥区别.

这样小方块面积和就是
$$
\sum_{i=1}^{n}  底 \times 高
=\sum_{i=1}^{n} \frac{1}{n}\times f(区间右端点) = \sum_{i=1}^{n}\frac{1}{n}\times f(\frac{i}{n})
$$
再取个极限
$$
\lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{n}\times f(\frac{i}{n}) = \lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{n}\times \sqrt{\frac{i}{n}} =\int_{0}^{1} \sqrt{n}
$$
把式子结构调整一下
$$
\lim_{n\to\infty}\sum_{i=1}^{n}\frac{1}{n}\times \sqrt{\frac{i}{n}} = \lim_{n\to\infty}\frac{1}{n}\sum_{i=1}^{n}\times \sqrt{\frac{i}{n}} = \lim_{n\to\infty}\frac{1}{n}\times \frac{1}{\sqrt{n}}\times(\sqrt{1}+\sqrt{2}+...+\sqrt{n})
$$
就是原式.