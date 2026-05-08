---
title: 线代破门而入
tags: 教程
abbrlink: 3ca8bcae
date: 2026-04-17 22:16:25
---

<p style="text-align: center;font-weight:bold;">zczzzzz · 杭州师范大学</p>


> *Such axioms, together with other unmotivated definitions, serve mathematicians mainly by making it difficult for the uninitiated to master their subject, thereby elevating its authority.*
>
> — Vladimir Igorevich Arnold

> 那些公理，连同其他毫无来由的定义，其主要作用不过是让门外汉望而却步，以此抬高数学的权威。
>
> — 弗拉基米尔·阿诺德


## Chapter 1　写在前面

这是继《C破门而入》后，又一力作。市面上的线代教材的语言表述（尤其是课后答案的编写）可以说是惨不忍睹，对新手来说着实不够友好。尤其这还是一门比较抽象的学科，这些教育资源迫使学生只能去死记硬背一条条所谓的定义和性质，妖魔化了这一门学科，这与数学的精妙性是背道而驰的。本文并不会教会你具体的线代计算技巧，比如如何化简各种被人为通过某种方式所凑好数据的、为应试考试而生的行列式的值，而是会阐述一种最最朴素的、认识线代世界的观念。

## Chapter 2　矩阵

如果要找一个符号来代表线性代数，我想一定是矩阵了。什么是矩阵呢？先说结论，矩阵是一种变换，是一种映射，正如$f(x)$ 代表着你把 $f$ 这个映射方式作用在 $x$上一样，当你把矩阵乘在某个东西的左边或右边时，也是对那个东西做了一个变换。

那么问题来了，这个变换是怎样的呢？下面我们论述的，作用对象都以
$$
\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}
$$
为例。我们不妨考虑最简单的情况，有一个单位矩阵
$$
E = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$
把它乘在 $\mathbf{x}$ 的左边，你会惊讶地发现$E\mathbf{x} = \mathbf{x}$！这是为什么呢？以第一行为例，按照矩阵的乘法规则，
$$
1 \cdot x_1 + 0 \cdot x_2 + 0 \cdot x_3 = x_1.
$$
其它行同理，都没有变，神不神奇？你可能会说这难道不显然吗，先别急，让我们好好看看它为什么没变。

如果把 $x_1, x_2, x_3$ 看作 $\mathbf{x}$在三维直角坐标系下的三个坐标，你发现与 $E$ 相乘，结果 $E\mathbf{x}$的第一个坐标刚好是 $E$ 的第一列的唯一一个 $1$ 乘在 $x_1$上，第二个坐标刚好是 $E$ 的第二列的唯一一个 $1$ 乘在 $x_2$上，第三个坐标刚好是 $E$ 的第三列的唯一一个 $1$ 乘在 $x_3$上，这给了我们一种感觉，似乎矩阵的每一列与被乘的向量的某一个坐标存在某些对应关系。

这好奇怪，怎么就给他对应上了。为啥要写成$1 \cdot x_1 + 0 \cdot x_2 + 0 \cdot x_3 = x_1$呢？书上教你的吗？我看你还是太功利地迫不及待想算出结果的每一个分量了。别急，我们换一种写法：
$$
x_1 \begin{pmatrix}1\\0\\0\end{pmatrix}

  + x_2 \begin{pmatrix}0\\1\\0\end{pmatrix}
  + x_3 \begin{pmatrix}0\\0\\1\end{pmatrix}
    = \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}.
$$
你可能会说，这不是一样吗？你再看看呢，啊，原来得到的新向量便是原来向量的坐标与这三个标准基相乘再相加得到的！

我们再看下面这个计算：
$$
A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad
  A\mathbf{x}
  = x_1\begin{pmatrix}2\\0\\0\end{pmatrix}

  + x_2\begin{pmatrix}0\\1\\0\end{pmatrix}
  + x_3\begin{pmatrix}0\\0\\1\end{pmatrix}
    = \begin{pmatrix}2x_1\\x_2\\x_3\end{pmatrix}.
$$
这下 $\mathbf{x}$终于变了，怎么变的呢？第一个坐标变成了 $2$倍！这在结果空间里长什么样呢？原来是 $\mathbf{x}$ 沿 $x$ 轴方向被拉长到$2$ 倍了！对比一下 $E$，还有什么不一样了呢？$A$ 的第一列也是 $E$的第一列的 $2$ 倍！啊，我们发现了，所谓矩阵是一种变换，就是变换了基！

写到这里我不得不辨析一下两个概念，也就是在某些教材的参考答案中被混淆使用的——**向量**和**坐标**。你可能觉得我在说废话，但我觉得正是作为一个初学者容易搞混的，于是我决定新开一段。

就以上面的计算为例，看看下面这句话："$\mathbf{x}$作为一个向量，它的坐标是$(x_1, x_2, x_3)$。"这句话是不是很对？不好意思，这是不严谨的，坐标是建立在一组确定的基之上的，你不能只说坐标是什么，而不指明基是什么。之所以大多数参考书上都这样写，是因为他们都默认了在标准基
$$
\mathbf{e}_1=\begin{pmatrix}1\\0\\0\end{pmatrix},\quad
  \mathbf{e}_2=\begin{pmatrix}0\\1\\0\end{pmatrix},\quad
  \mathbf{e}_3=\begin{pmatrix}0\\0\\1\end{pmatrix}
$$
下讨论。甚至我们可以这样说：对于 $A$ 这个变换，$\mathbf{x}$在标准基下的坐标是 $(x_1, x_2, x_3)$，而 $A\mathbf{x}$ 在基$\bigl(\begin{smallmatrix}2\\0\\0\end{smallmatrix}\bigr),
 \bigl(\begin{smallmatrix}0\\1\\0\end{smallmatrix}\bigr),
 \bigl(\begin{smallmatrix}0\\0\\1\end{smallmatrix}\bigr)$ 下的坐标也是$(x_1, x_2, x_3)$，只是 $A\mathbf{x}$在默认的标准基下的坐标是我们所熟知的 $(2x_1, x_2, x_3)$。

到这里我们终于有点发现了，似乎 $A$ 所对应的变换就是把 $\mathbf{x}$在标准基下的坐标强制应用在 $A$的每一列所对应的新的基下。这可能也没那么好理解，没关系，我们再看一个例子：
$$
A = \begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}, \qquad
  A\mathbf{x}
  = x_1\begin{pmatrix}0\\1\\0\end{pmatrix}

  + x_2\begin{pmatrix}1\\0\\0\end{pmatrix}
  + x_3\begin{pmatrix}0\\0\\1\end{pmatrix}
    = \begin{pmatrix}x_2\\x_1\\x_3\end{pmatrix}.
$$
非常神奇，这个 $A$居然让 $\mathbf{x}$ 的前两个分量交换了！让我们仔细看看发生了什么，原来$A$ 就是 $E$交换了前两列的结果，如果动用一下您的空间想象力，您会发现这个矩阵就是原先的$\mathbb{R}^3$ 空间关于平面 $x=y$对称的结果。相信您已经有一点感觉了，那么接下来我们不再计算，就看矩阵，您能想象出是怎样的变换吗？
$$
A = \begin{pmatrix}1&0&0\\0&0&1\\0&-1&0\end{pmatrix}, \qquad
      B = \begin{pmatrix}1&0&0\\1&1&0\\0&0&1\end{pmatrix}.
$$
不难发现，$A$对应的空间绕 $x$ 轴旋转了 $90°$，原来的 $y$ 轴在原来 $z$轴的负方向上；而 $B$ 对应的矩阵则是被压扁了一点，$x$ 轴正方向与 $y$轴正方向的夹角变为了 $45°$。

## Chapter 3　线性方程组

在学习时，你可能会认为线性方程组是一个可怕的庞然大物，有那么多的未知数，有那么多等式。然而，在这一节里，我们将会探寻线性方程组的本质。

我们还是将以三个未知数的线性方程组为例，因为三维看起来略比二维全面，但有便于想象。我们把它称作**非齐次线性方程组**，若其形如：
$$
\begin{cases}
    a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = y_1, \\
    a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = y_2, \\
    a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = y_3.
\end{cases}
$$
这个非齐次线性方程组的系数矩阵为： 
$$
A = \begin{pmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
\end{pmatrix}.
$$
哦？这里有个矩阵，我们刚刚学习了矩阵是一种对$\mathbf{x}$ 的变换，那我们不妨把这个方程改写为： 
$$
\begin{pmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
\end{pmatrix}
  \begin{pmatrix} x_1\\x_2\\x_3 \end{pmatrix}
  = \begin{pmatrix} y_1\\y_2\\y_3 \end{pmatrix},
$$
也就是：
$$
A\mathbf{x} = \mathbf{y}.
$$
啊，原来求解三个未知数就是求解这个向量$\mathbf{x}$啊，也就是说，我们在空间中找一个向量，而它经过系数矩阵的变换后是$\mathbf{y}$！那这该怎么找呢？我们大可以用书上的方法，化为阶梯型什么的，在这里不做赘述，那有没有什么别的办法呢？既然系数矩阵在把空间捏变形的同时捎带手让$\mathbf{x}$ 恰好落在了 $\mathbf{y}$的位置上，我们能不能把空间捏回去，这样 $\mathbf{y}$ 不就能落在要找的$\mathbf{x}$的位置上了吗？捏回去，好主意，怎么捏呢，其实就是求这个变换的逆过程，也就是求
$$
\begin{pmatrix}
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
  \end{pmatrix}^{-1},
$$
我们把它称作矩阵的逆，关于如何求逆，不是本节的讨论内容，你现在只需要知道，它可以把空间复原，即：
$$
A^{-1} A = E.
$$
而我们要做的就是在等式两边同时左乘系数矩阵的逆，而我们知道了乘单位矩阵不改变任何东西，便得到了：
$$
A^{-1} A \mathbf{x} = E\mathbf{x} = \mathbf{x} = A^{-1}\mathbf{y}.
$$
好啊好啊，这么快就做出来了！但这个能把空间复原的魔法真的永远存在吗？我们来考虑下面这个矩阵：
$$
\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}.
$$
通过前面的学习，我们可以想象，它把整个三维空间压成了一个只有 $xOy$平面的大饼，再考虑下面两个向量与它的乘积：
$$
\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}
  \begin{pmatrix}0\\0\\1\end{pmatrix}
  = \begin{pmatrix}0\\0\\0\end{pmatrix}, \qquad
  \begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}
  \begin{pmatrix}0\\0\\999999\end{pmatrix}
  = \begin{pmatrix}0\\0\\0\end{pmatrix}.
$$
现在是真的不难发现，无论原来的向量的 $z$方向上有怎样的属性，被这个矩阵作用后都消失了，转而变为了$0$。对同一个作用结果 $\mathbf{0}$，可有无穷个 $\mathbf{x}$被该矩阵作用得到。这种维度上的丢失则说明了这个矩阵是**不可逆**的，就像一块橡皮泥，无论你把他捏成什么形状，我都有办法复原，然而一旦你把它坐扁，我就捏不回去了。

再看看上述式子的右边，居然是个零向量！它似乎具有一些奇特的性质，我们把它称作**齐次线性方程组**，若其形如：
$$
\begin{cases}
    a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = 0, \\
    a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = 0, \\
    a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = 0.
\end{cases}
$$
即
$$
\quad A\mathbf{x} = \mathbf{0}.
$$
什么意思呢？我们要找一个向量，它经过这个变换后居然是个零向量！如果$\mathbf{x}$非零的话，真的有别的解吗？除非......除非像刚才一样压扁了空间！所以我们可以很自然地得出下面的结论：对于齐次线性方程组，**要么仅有零向量作为它的解，要么有无穷多解**——不可能存在唯一的非零解。

好了让我们再看看非齐次线性方程组解的情况。看起来只要系数矩阵没有被降维，那么它就一定有唯一解，也就是系数矩阵**满秩**的情况（至于秩是什么，这里也先不做论述，满秩可以暂且理解为没被降维）。那让我们再看看不满秩的情况，不如就以上面这个为例先考虑：
$$
\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}
  \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
  = \begin{pmatrix}1\\1\\0\end{pmatrix}.
$$
如果按照课本上的解法，你会发现它有无穷多解，$x_3$是一个自由变量。从几何角度看，所有终点在直线 $x=1,\,y=1$（平行于 $z$轴）上的向量都会被这个矩阵压成$\bigl(\begin{smallmatrix}1\\1\\0\end{smallmatrix}\bigr)$这个向量，也可以说明原方程有无穷多解。现在再考虑：
$$
\begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}
  \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
  = \begin{pmatrix}1\\1\\1\end{pmatrix}.
$$
啊？空间不是被压到 $xOy$平面上了吗，怎么还会有 $z$ 方向的分量？看起来所有的 $\mathbf{x}$都不能满足这一条件，那它就是**无解**的。

综上所述，**对于不满秩的系数矩阵，要么仅有无穷多解，要么无解**。

然而，在一些题目中我们也许会碰到系数矩阵非方阵的情况，又该怎么办呢？我们可以把它补全！先看这个：
$$
\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix}
  \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
  = \begin{pmatrix}y_1\\y_2\end{pmatrix}.
$$
它可以被补为：
$$
\begin{pmatrix}1&2&3\\4&5&6\\0&0&0\end{pmatrix}
  \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
  = \begin{pmatrix}y_1\\y_2\\0\end{pmatrix}.
$$
这个矩阵同样是把三维空间压缩到了 $xOy$平面上。现在我们再看一种比较奇特的：
$$
\begin{pmatrix}1&2\\3&4\\5&6\end{pmatrix}
  \begin{pmatrix}x_1\\x_2\end{pmatrix}
  = \begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}.
$$
你发现这个矩阵居然可以把一个二维的向量变成三维的！同样可以把它补为：
$$
\begin{pmatrix}1&2&0\\3&4&0\\5&6&0\end{pmatrix}
  \begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}
  = \begin{pmatrix}y_1\\y_2\\y_3\end{pmatrix}.
$$
啊，你可以发现，它是三维空间里的一个二维平面！法向量是一个同时垂直于$\bigl(\begin{smallmatrix}1\\3\\5\end{smallmatrix}\bigr)$ 和$\bigl(\begin{smallmatrix}2\\4\\6\end{smallmatrix}\bigr)$的向量。请注意，$x_3$ 在这里可以任取，但若判断原方程解的情况，不应该把$x_3$ 看作未知数。

如果你认真听课了，可能会在这里反驳我：老师说解两个未知数只需要两个方程，你这里写三个能行吗？没错，所以如果要让上面的这个方程有解，$y_3$的选择非常严格，在最后一行系数确定的情况下，只有一个 $y_3$可以使方程有解——此时方程 $5x_1+6x_2=y_3$一定可以由前两个方程线性表出，也就是前两个方程各乘某个系数再相加，就可以得到第三个方程。换句话说，最后一个方程不提供任何额外的有效信息，实际上你还是在解由前两个方程构成的方程组，而这与老师的说法并没有冲突。

你可能在书上看到这样一句话：线性方程组有解，当且仅当系数矩阵与增广矩阵有相同的秩。$\bigl(\begin{smallmatrix}1&2\\3&4\\5&6\end{smallmatrix}\bigr)$由于只有两列，所以秩不可能超过 $2$；为使其有解，对应的增广矩阵
$$
\begin{pmatrix}1&2&y_1\\3&4&y_2\\5&6&y_3\end{pmatrix}
$$
的秩也得是$2$，所以其中两行一定可以线性表出剩下一行！

恭喜你，已经对线性方程组的解有一些建树了，下面有一些判断题考考你。设 $A$是 $m\times n$ 矩阵，且 $\mathbf{b}$ 是 $m$ 维列向量：

1.  若 $A\mathbf{x}=\mathbf{0}$ 有零解，则 $A\mathbf{x}=\mathbf{b}$有唯一解；

2.  若 $A\mathbf{x}=\mathbf{b}$ 存在两个不同的解，则$A\mathbf{x}=\mathbf{0}$ 有无穷多解；

3.  若矩阵 $A$ 的秩为 $m$，则 $A\mathbf{x}=\mathbf{b}$ 一定有解；

4.  若矩阵 $A$ 的秩为 $m$，则齐次线性方程组 $A^T\mathbf{x}=\mathbf{0}$仅有零解。
<style>.post__license{display:none!important;}</style>
<div class="post__license" style="display:block !important;">
        <p style="font-weight: bold;">
            <strong>本文作者：</strong> zczzzzz
        </p>
        <p>
            <strong>
                本文链接：
            </strong>
            <a href="https://www.genkaim.top/posts/3ca8bcae" data-pjax-state="">https://www.genkaim.top/posts/3ca8bcae</a>
        </p>
</div>