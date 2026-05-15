---
title: 如何证明∞等于0
tags: 发癫
abbrlink: b1898e8e
date: 2026-03-18 22:28:43
---

若要直接证明这个命题十分困难. 但是我们可以通过构造一个数列来辅助证明.

构造数列
$$
a_1=2, a_2=4,...,a_n=2^n
$$
## 通过递推式求数列极限

$$
\frac{a_n}{a_{n-1}}=\frac{2^n}{2^{n-1}}=2\\
\therefore a_n=2a_{n-1}
$$



若设$\lim_{n \to \infty}a_n=A$, 则有
$$
A=2A \\
A=0(1)
$$
## 通过通项求数列极限

两边同时取极限
$$
\lim_{n \to \infty}a_n=\lim_{n \to \infty}2^n=\infty(2)
$$
联立`(1)`式，得
$$
0=\infty
$$
得证.

