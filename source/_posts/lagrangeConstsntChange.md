---
title: 非齐次一阶线性微分方程探讨自然解法|常数变易法
tags: 数学
abbrlink: 4b23f68
date: 2025-12-30 10:54:55
---



## 齐次一阶线性微分方程

由齐次一阶线性微分方程解法引入：$\text{}^{[1]}$
$$
\frac{dy}{dx}+P(x)y=0
$$
再分离变量
$$
\frac{dy}{y}=-P(x)dx
$$
积分
$$
\int \frac{dy}{y}=\int -P(x)dx\\
\ln|y|=\int -P(x)dx+C_1 \\
$$
两边取对数
$$
e^{\ln|y|}=|y| = e^{C_1} \times e^{\int -P(x)dx} \\
y=\pm e^{C_1} e^{\int -P(x)dx} = Ce^{\int -P(x)dx}, (C=\pm e^{C_1})
$$
此时齐次一阶线性微分方程通解就求完了.

##  非齐次一阶线性微分方程

非齐次一阶线性微分方程部分，形如
$$
\frac{dy}{dx}+P(x)y=Q(x)\qquad (1)
$$
类似于齐次一阶线性微分方程，我们尝试分离变量.$\text{}^{[2]}$

$$
dy=Q(x)dx-y \cdot P(x)dx\\
\frac{dy}{y}=\frac{Q(x)}{y}dx-P(x)dx
$$
虽然此时有y纠缠在x里，但若继续积分
$$
\int \frac{dy}{y}= \int (\frac{Q(x)}{y}dx-P(x))dx\\
\ln|y| = \int (\frac{Q(x)}{y}dx-P(x))dx +C_1\\
y= C \cdot e^{\int \frac{Q(x)}{y}dx} \times e^{\int-P(x)dx}
$$
其中不难发现，$C \cdot e^{\int \frac{Q(x)}{y}dx}$是关于$x$的一个函数，若设
$$
u(x)=C \cdot e^{\int \frac{Q(x)}{y}dx}
$$
那么求出未知函数$u(x)$，就解完方程了.



此时有
$$
y=u(x)e^{\int -P(x)dx} \qquad (2)
$$
为与微分方程建立联系，求导有
$$
\frac{dy}{dx}=u'(x)e^{\int -P(x)dx}+u(x)e^{\int -P(x)dx} \cdot(-P(x)) \qquad(3)
$$
现在我们有了(1)、(2)and(3)式，其中(1)式是已知量，$u(x)$是要求的函数，(2)(3)式中$e^{\int -P(x)dx}$是已知量，$u(x)$是未知量. (2) (3)即可用于代入(1)消元.

(2) (3)代入(1)得
$$
u'(x)e^{\int -P(x)dx}+u(x)e^{\int -P(x)dx} \cdot(-P(x))+P(x)\cdot u(x)e^{\int -P(x)dx} =Q(x)
$$
整理得
$$
u'(x)e^{\int -P(x)dx} = Q(x) \\
u'(x) = Q(x)e^{\int P(x)dx}
$$
积分
$$
\int u'(x)=\int Q(x)e^{\int P(x)dx} \\
u(x)=\int Q(x)e^{\int P(x)dx}+C \qquad (4)
$$
(4)代入(2)得
$$
y=(\int Q(x)e^{\int P(x)dx}+C)e^{\int -P(x)dx}
$$
这就是非齐次一阶线性微分方程通解.

##  参考文献 

[1]同济大学数学科学学院. 高等数学[M]: 高等数学出版社, 2023:307-308.

[2]zczzzzz. 微信聊天记录[J/OL]. [2025-12-30].