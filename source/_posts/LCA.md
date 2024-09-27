---
title: 'LCA|最近公共祖先 详解 '
tags: Coding
cover: 'https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308100919024.webp'
abbrlink: '90748940'
date: 2023-07-16 08:19:26
swiper_index: 5
description: LCA|最近公共祖先 详解|genkaimの博客|和它的全称一样，lca（$Lowest Common Ancestor$）目的的就是任意两个点最近的公共祖先在哪
---

![cover](https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308100919024.webp)
## LCA介绍

和它的全称一样，lca（$Lowest Common Ancestor$）目的就是任意两个点最近的公共祖先在哪

## 性质 <SMALL>~~（或许你不需要记这个）~~</SMALL>

> From [OI-wiki](https://oi-wiki.org/graph/lca/)

 为了方便，我们记某点集 $S = \left\{ v_1,v_2,...,v_n \right\}$  的最近公共祖先为 $LCA(v_1,v_2,...,v_n)$ 或 $LCA(S)$

1. $LCA(\left\{u\right\}) = u$ ;

2. 若 $u$ 是 $v$ 的祖先，当且仅当 $LCA(u, v) = u$ ;

3. 如果 $u$ 不为 $v$ 的祖先，并且 $v$ 不为 $u$ 的祖先，那么 $u, v$ 分别处于 $LCA(u, v)$ 的两颗不同子树中 ;

4. 前序遍历中， $LCA(S)$ 出现在所有 $S$ 元素之前，后续遍历中 $LCA(S)$ 则出现在所有 $S$ 元素之后 ;

5. 两点集并的最近公共祖先为两点集分别的最近公共祖先，即 
$\qquad   LCA(A \cup B) = LCA(LCA(A),  LCA(B))$ ;

6. 两点的最近公共祖先必定处在树上两点间的最短路上 ;

7. 
   $$
   d(u, v) = h(u) + h(v) - 2 \times h(LCA(u, v))
   $$

其中 $d$ 是树上两点间的距离， $h$ 代表某点到树根的距离 $(dep)$ ;

## 朴素求法

朴素求LCA的想法很简单，只要一层层往上走直到两个点相同即可（但是有很多小细节需要注意）。

​	1.计算每个点的父节点以及每个点的深度（到父节点的距离）显然，我们需要定义dep[N], root[N]两	个数组来分别存储 $i$ 点的深度和 $i$ 点的父节点，在求LCA需要先跑一遍dfs。

```C++
/*
调用函数时，传入根节点，显然根节点并没有父节点，所以_root可以传入0 形如 init_root(1, 0);
之后在计算dep[N]数组的时候不用特判，直接在dep[0]的基础上加1，深度就是1（当然你的dep[0]需要初始化）
*/
void init_root(int x, int _root){//x代表当前节点，_root代表当前节点的父节点
    root[x] = _root;//存储x点的父节点
    dep[x] = dep[_root]+1;//存储x点的深度
    for(int i = 0; i < mp[x].size(); ++i){//dfs
        int y = mp[x][i];
        if(y == _root)continue;//不能往回走
        init_root(y, x);//下一个点
    }
}
```

​		2.接下来就是LCA函数了，需要注意的是，对于 $LCA(x, y)$ 其中 $x$  的深度必须和 $y$ 相同才能一起往	上走不然就会~~（爱人~错过）~，所以在网上走前需要把 $x$ 和 $y$ 的深度弄到相同。

```c++
int lca(int x, int y){
    if(dep[x] < dep[y])swap(x, y);//永远让dep[x] > dep[y]这样后面就不用判断力
    while(dep[x] != dep[y]){
        x = root[x];//让x 和 y深度相同
    }
    while(x != y){//一起向上走
        x = root[x];
        y = root[y];
    }
    return x;//此时x == y返回谁都行
}
```

## 倍增求法

和朴素的求法不同，倍增求法用st表进行预处理，可以减少向上走的次数，从而减少复杂度。

因为需要减少向上走的次数，对于 st [i] [j] 存储的是从i点出发，走了(1<<j)个点到的位置。

​		1.首先我们需要预处理。（dfs还是要跑的，但是在此处省略，和朴素LCA一样）

```c++
void init_st(){
    for(int i = 1; i <= n; ++i){
        st[i][0] = root[i];//st表的初始状态：i走(1<<0)到的是i的父节点
    }

    for(int j = 1; (1<<j) <= n; ++j){//因为状态由j-1推到j,所以要先循环j
        for(int i = 1; i <= n; ++i){
            st[i][j] = st[st[i][j-1]][j-1];
            /*
            从i跳（1<<j）个点可以分解成先跳(1<<(j-1))个点，跳到st[i][j-1]，
            再从st[i][j-1]跳(1<<(j-1))个点到st[i][j]
            */
        }
    }
}
```

​		2.接下来写LCA函数：这里需要对两个部分分别修改。

​			2.1对于让 $x$ 和  $y$ 深度相同的部分，我们需要用到一些2进制的知识

​			对于 $x$ ，需要向上走到步数是 $x$ 和 $y$ 的深度差。（向上走一步，深度-1）

​			所以记录下 $len$ 为 $x$ 和 $y$ 的深度差。

​			我们需要知道的是，$len$ 如何分解成 $2$ 的次方相加（因为st表是以2的次方存储的）。

​			**举个栗子**

​			假设 $len = 100$，转成二进制是 $1100100$ ，显然，

​			只有对应位是1的位置才对总体的值有贡献，

​			所以我们当位置存在 $1$ 时，向上走(1<<i)个点就行了（i指对应的位数）

​			这样，总共走的点数就会是 $len$ 。

```c++
    int len = dep[x]-dep[y];
    int i = 0;//第几位
    while(len != 0){//使得x, y深度相同 建议脑子里换成二进制理解
        if(len%2 == 1){//当前位置存在1
            x = st[x][i];//向上走
        }
        len /= 2;//或者右移 (len>>1);
        i++;
    }
    if(x == y)return x;//如果这个时候x == y就说明x和y在同一棵子树，没必要进行下一步了。
```

​		2.2接下来需要 $x$ 和 $y$ 一起向上走。

​		这里用到二分的思想，但是写法和常规二分不太一样。

​		如果 $x$ 和 $y$ 一起跳了(1<<i)个点后，x == y了，说明跳过了

​		它们最近的公共祖先深度必然<=当前点的深度。

​		如图，对于5和4号点，显然跳过了它们的最近公共祖先

​		(顺手推荐下很方面画图的网站[https://csacademy.com/app/graph_editor/](https://csacademy.com/app/graph_editor/))

​		所以显然，我们需要在第一个 x' != y' 的地方更新x和y才能保证不走过。

​		(x' 和 y'指在循环中走跳(1<<i)个点时到的点)

​		这样得到的点应该是在 $x$ 和 $y$ 的最近公共祖先的前一个点，所以需要返回root[x]。

<img src="https://raw.gitmirror.com/genkaim/blog_pic/main/data/202308090851667.png" style="zoom:30%;" />

```c++
//log2(n)函数在头文件cmath中，得以2为底n的对数
    for(int i = log2(n); i >= 0; --i){
        int _x = st[x][i];//在当前i下x和y跳到的位置
        int _y = st[y][i];
        if(_x == _y)continue;//当x和y跳到的位置相同，说明跳过了，x和y不更新
        x = _x;//更新以二分逼近x和y的最近公共祖先的子节点
        y = _y;
    }
    return root[x];
```

最后附上包含预处理的完整代码：

[洛谷](https://www.luogu.com.cn/problem/P3379)P3379 【模板】最近公共祖先（LCA）

模板题目也不能抄题解哦ヾ(•ω•`)o

```c++
#include<iostream>
#include<vector>
#include<cstdio>
#include<cmath>
#define int long long
using namespace std;
const int N = 1e6;
vector<int> mp[N];
int n, m;
int dep[N], root[N], st[N][20];
/*
调用函数时，传入根节点，显然根节点并没有父节点，所以_root可以传入0 形如 init_root(1, 0);
之后在计算dep[N]数组的时候不用特判，直接在dep[0]的基础上加1，深度就是1（当然你的dep[0]需要初始化）
*/
void init_root(int x, int _root){//x代表当前节点，_root代表当前节点的父节点
    root[x] = _root;//存储x点的父节点
    dep[x] = dep[_root]+1;//存储x点的深度
    for(int i = 0; i < mp[x].size(); ++i){//dfs
        int y = mp[x][i];
        if(y == _root)continue;//不能往回走
        init_root(y, x);//下一个点
    }
}

void init_st(){
    for(int i = 1; i <= n; ++i){
        st[i][0] = root[i];//st表的初始状态：i走(1<<0)到的是i的父节点
    }

    for(int j = 1; (1<<j) <= n; ++j){//因为状态由j-1推到j,所以要先循环j
        for(int i = 1; i <= n; ++i){
            st[i][j] = st[st[i][j-1]][j-1];
            /*
            从i跳（1<<j）个点可以分解成先跳(1<<(j-1))个点，跳到st[i][j-1]，
            再从st[i][j-1]跳(1<<(j-1))个点到st[i][j]
            */
        }
    }
}

int lca(int x, int y){
    if(dep[x] < dep[y])swap(x, y);
    int len = dep[x]-dep[y];//按位取位权
    int i = 0;//第几位
    while(len != 0){//使得x, y深度相同 建议脑子里换成二进制理解
        if(len%2 == 1){//当前位置存在1
            x = st[x][i];//向上走
        }
        len /= 2;//或者右移 (len>>1);
        i++;
    }
    if(x == y)return x;//如果这个时候x == y就说明x和y在同一棵子树，没必要进行下一步了。
    //log2(n)函数在头文件cmath中，得以2为底n的对数
    for(int i = log2(n); i >= 0; --i){
        int _x = st[x][i];//在当前i下x和y跳到的位置
        int _y = st[y][i];
        if(_x == _y)continue;//当x和y跳到的位置相同，说明跳过了，x和y不更新
        x = _x;//更新以二分逼近x和y的最近公共祖先的子节点
        y = _y;
    }
    return root[x];
}

signed main(){
    cin >> n >> m;
    for(int i = 1; i <= n; ++i){
        int x, y;
        cin >> x >> y;
        mp[x].push_back(y);
    }
    init_root(1, 0);
    init_st();
    for(int i = 1; i <= m; ++i){
        int x, y;
        cin >> x >> y;
        cout << lca(x, y) << endl;
    }
    return 0;
}
```

## 例题

[洛谷](https://www.luogu.com.cn/problem/P9432)P9432 [NAPC-#1] rStage5 - Hard Conveyors

这里什么都没有捏😋
