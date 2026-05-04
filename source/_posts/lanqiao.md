---
title: 蓝桥杯单片机国赛模板详解 | 各类功能实现详解
tags: 教程
abbrlink: eabfbc74
description: 基于STC单片机的蓝桥杯国赛模板，涵盖定时器时钟、矩阵键盘扫描、组合键与长按处理、数码管显示等功能实现详解
---

## 写在前面

这个模板是我在刷题的过程中总结出来的，如您觉得有改进之处或者错误欢迎指出. 另外，主播的英语不好，函数名都是乱取的(

总的来说，模板由两部分组成. 一部分使用一个定时器负责当作时钟，可以定时调用函数, 而另一部分就是实现功能的函数. 

## 时钟部分

> 以下均以`Timer0​`为例.

作为计时的部分，我们首先需要确认定时器的最小时间. 一般我选择1ms. 这样，1ms整数倍的时间都能够在中断函数中被表示.

```c
void Timer0_Init(void)		//1毫秒@12.000MHz
{
	AUXR &= 0x7F;			//定时器时钟12T模式
	TMOD &= 0xF0;			//设置定时器模式
	TL0 = 0x18;				//设置定时初始值
	TH0 = 0xFC;				//设置定时初始值
	TF0 = 0;				//清除TF0标志
	TR0 = 1;				//定时器0开始计时
	ET0 = 1;				//开启Timer0中断
	EA = 1;					//开启总中断
}
```

那如何隔一段时间调用函数呢？我们需要一个计数器来记录时间过去了多久.

若定义一个`cnt`, 每次调用中断函数都过去**1ms**的时间, `cnt`都会计一次数，这样当过去$\text{timeLimit}\times \text{1ms}$的时候，`if`条件成立，调用函数. 这样就实现了**每过一段任意的时间**调用一次函数.

```c
void Timer0_Routine(void) interrupt 1 {
	static unsigned char cnt=0;
	cnt++;
	if(cnt >= timeLimit){  //<<---
		//do something...
		cnt = 0;
	}
}
```
接下来要解决的问题就是：在这个中断函数中应该干什么呢?

## 输入与输出

###  按键扫描

这部分 分为扫描矩阵键盘与处理扫描函数返回值两个部分.

第一部分，我们定义一个函数用来扫描矩阵键盘，返回当前键码值. 函数原型为:

`unsigned char ScanMatrix(void);`

因为蓝桥杯要用到的按键不多，所以直接对一个引脚进行赋值/读取即可. 

例如我要看`S7`按键是否被按下，我只需要使得`COL`中只有`COL1`为0（防止其他按键干扰），然后去判断`ROW1`是否为0就行了（若按下，则强制ROW1和COL1电位相等，为低电平）.

同样，如果要判定是否有两个按键同时被按下的话，可以把他们对应的引脚值暂存起来，最后一起判定是否都为低电平.


```c
//existing code..
sfr P4 = 0xC0;
sbit COL1 = P4^4;sbit COL2 = P4^2;
sbit ROW3 = P3^2;sbit ROW4 = P3^3;//引脚定义

unsigned char ScanMatrix(){
	unsigned char key = 0;//若无按键按下，则会返回0
	bit s5; bit s8;
    
	COL1 = 0;//判定COL1列
	COL2 = 1;//COL3 = 1; COL4 = 1;
	s5=ROW3;//暂存一下
	if(ROW3 == 0) key=5;
	else if(ROW4 == 0) key=4;
    
	COL1 = 1;//判定COL2列
	COL2 = 0;//COL3 = 1; COL4 = 1;
	s8=ROW4;//暂存一下
	if(ROW3 == 0) key=9;
	else if(ROW4 == 0) key=8;
    
	if(!s5 && !s8) key=58;//两个按键按下！
	return key;
}
```

这样，`ScanMatrix`的功能就是，如果有按键被按下返回键码值，否则返回0.

那么，怎么处理返回值呢？

一般是在按键松开时触发，所以只需要定义一个static的变量，存上一次扫描的键码值. 如果这次的键码值为0，而上一次的键码值不为0，就说明按键松开了.

但这里处理双键有一个小细节需要注意. 松手时可能会出现双键不同时松开的情况，例如一起按下`s5`与`s8`，最后先松开`s5`，这样`preKey`是`58`，而`key`是`8`不是`0`，与单键不一样，需要特判.  此外，还需要保证后松开的`s8`不会触发单键. 所以需要在触发双键时用一个变量标记状态，使得后一次单键不触发.

> ps: 因为这里**每50ms**才扫描一次按键，所以不用消抖.

```c
void ProcessKey(){
    // preKey: 上一次扫描到的按键值
    // comboLock: 组合键已处理标志，防止松开过程中残余单键误触发
    static unsigned char preKey=0, comboLock=0;
    unsigned char key = ScanMatrix();

    if(key != preKey) { // 按键状态发生变化
        if(key == 0) { // 所有键已全部松开
            if(!comboLock){ // 非组合键结尾，正常处理松开事件
                if(preKey == 4) {} // S4 松开
                if(preKey == 58){} // S5+S8 同时松开
            }
            comboLock = 0; // 全部松开后复位组合锁
        }
        else { // 有键被按下或正在变化（处理组合键中途松开的情形）
            if(preKey == 58){ // S5+S8 组合键已触发，其中一键开始松开
                comboLock = 1; // 加锁，防止剩余单键松开时被误识别为单键事件
            }
        }
        // do something...
    }
    preKey = key; // 更新状态
}
void Timer0_Routine(void) interrupt 1 {
	static unsigned char cnt=0;
	//existing code...
	cnt++;
	if(cnt >= 50){ 
		ProcessKey();//50ms扫描一次键盘
		cnt = 0;
	}
}
```

此外，长按也可以在这里处理. 不同的是，**它不用在按键松开的条件下处理**，所以在`if`外写. 同样需要定义一个计数变量用来记录长按了多久，在大于一定值时触发.

```c
void ProcessKey(){
	static unsigned char preKey=0, s4Cnt=0;
	unsigned char key=ScanMatrix();
	//existing code...
	
	if(key==4) s4Cnt++;
	else s4Cnt=0;
	if(s4Cnt>=10){//长按了10*100ms=1s
		//do something...
	}
	preKey = key;
}
```

### 数码管显示

模板中，时钟最小有1ms，这已经很小了，没必要再在中断里调用循环了，直接把中断当循环用就行了. 

so在中断里面需要调用一个函数，它的功能是更新指定位置的数码管. 与之配套的，需要一个数组存储显示的数据.

```c
unsigned char segData[8] = {0, 1, 2, 3, 4, 5, 6, 7};
unsigned char code segTable[18] = {0xC0, 0xF9, 0xA4, 0xB0, 0x99, 0x92, 0x82, 0xF8, 0x80, 0x90, 0xFF, 
    0xBF, /*11 -*/
    0xC6, /*12 C*/
    0x89, /*13 H*/
    0x8E, /*14 F*/
    0x8C, /*15 P*/
    0x86, /*16 E*/
    0x88, /*17 A*/
};
void DisplaySingleDigit(unsigned char addr) {
    //消隐
    P2 = (P2 & 0x1F) | 0xE0; 
    P0 = 0xFF;
    P2 = P2 & 0x1F; //Lock
	//位选
    P2 = (P2 & 0x1F) | 0xC0; //
    P0 = (1 << addr);
    P2 = P2 & 0x1F; //Lock
	//段选
    P2 = (P2 & 0x1F) | 0xE0; 
    P0 = segTable[segData[addr]];
    P2 = P2 & 0x1F; 
}
```

而在中断之中，需要用一个变量指明该更新哪一位数码管

```c
void Timer0_Routine() interrupt 1 {
    static unsigned char segCnt=0;
    static unsigned char cnt=0;
    //existing code...
    DisplaySingleDigit(segCnt);
    if(cnt&0x01) segCnt++;//与if(cnt%2)等价，速度快一些
    cnt++;
    if(segCnt>=8) segCnt=0;
    if(cnt >= timeLimit){
        //do something...
        cnt = 0;
    }
}
```

这样就写完了.

## 主函数如何写？

比如说我们有一个函数`Funtion()`用来获取外设数据与进行逻辑计算. 那是在中断中调用好呢，还是在主循环调用好呢？后者更好. 因为前者会导致函数阻塞中断，会导致中断时间不准确. 比如`OneWire`的通讯时间就需要几十毫秒.

所以我们在中断中需要做的是操控一个标志变量，让主函数里的循环去读取这个变量观察是否运行.

下面实现了**每100ms**运行一次`Funtion`.

```c
volatile bit runFlag=0;
void main() {
	while(1){
		if(runFlag) {
            runFlag=0;//先置0，防止运行时间超过100ms的话，会导致下一次运行失效的情况.
			Function();
		}
	}
}
void Timer0_Routine() interrupt 1 {//1ms per time
    static unsigned char cnt=0;
    cnt++;
    if(cnt >= 100){
        //do something...
        runFlag = 1;
        cnt = 0;
    }
}
```

到这里，基本模板的部分结束了. 在这个模板之上调用封装好的外设函数与数据处理等函数完全可以应付蓝桥杯了. 下面的外设部分本意是我个人复习之用，所以可能解析写的不是很详细.

## 外设

以下设计通信协议的内容均使用蓝桥杯官方数据包里的参考代码.

### 串口

**发送**

这部分比较简单，直接给出代码:

```c
void TransmitData(unsigned char *dat) {
    while(*dat != '\0') {
        SBUF=*dat;
        while(TI==0);
        TI=0;
        dat++;
    }
}
```

**接收**

对于串口单个数据的读取来说，并不难. 难的是多个数据的读取与发送，也就是字符串的匹配与异常处理. 这部分很难总结，下面以一个具体的题目为例.

比如说，我需要定义一个这样的命令：`P:A,V:B;`:	

在数码管第A个位置显示B. 若B大于10则向后移位填入, 如果超出范围则把超出部分从头填入. 如果设置成功，串口返回"OJBK"，反之返回"ERROR". 如果B是`'?'`，那么返回A位置的数字.

一般不考虑把字符串暂存起来/用很多`if-else`，这样会浪费空间/很难维护.

这里考虑使用**有限状态机**. 简单来说，**有限状态机就是一个“记录当前走到哪一步，并根据下一个输入决定下一步去哪”的逻辑模型. 这种机制最大的好处是**：它永远知道自己现在处于哪一步，绝不会错乱。一旦遇到不符合预期的字符，直接把状态重置为 0，容错能力极强.

>**状态 0（IDLE / 找 P）：** 保安在门口打瞌睡。
>
>- 如果收到 `P` -> 保安醒了，进入**状态 1**。
>- 收到其他 -> 继续打瞌睡（丢弃数据，保持**状态 0**）。
>
>**状态 1（等冒号 1）：** 保安看到 P 了，等着验证身份。
>
>- 如果收到 `:` -> 验证通过，进入**状态 2**。
>- 收到其他 -> 验证失败，报错，踹回**状态 0**。
>
>**状态 2（读 A）：** 身份没问题，开始记下位置 A。
>
>- 如果是 `数字` -> 存入变量 A，保持在**状态 2**。
>- 如果是 `,` -> 位置输入完毕，进入**状态 3**。
>- 收到其他 -> 格式错误，踹回**状态 0**。
>
>**状态 3（找 V）：** ... 以此类推，直到找到最后的 `;` 和 `:`。

首先我们进行状态拆分，观察`P:A,V:B;`有哪些状态:

| **状态**  | **描述**                  |
| --------- | ------------------------- |
| **状态0** | 等待输入;                 |
| **状态1** | 位置指示符，等待位置输入; |
| **状态2** | 位置输入;                 |
| **状态3** | 分隔符;                   |
| **状态4** | 数值指示符，等待数值输入; |
| **状态5** | 数值输入;                 |
| **状态6** | 结束符.                   |

接下来，在中断函数里，我们根据当前的状态来判断该做什么.

这里主要有以下几个点需要注意：不要在串口中断里发送数据，会阻塞导致主时钟计数不准；需要在时钟中断添加一些超时处理，防止非常规的数据阻塞串口.

`send`作为发送的标志变量，默认是114意味着不要发送. 若触发查询功能，他作为指示位置的变量小于8，所以可以用大于8的其他数字指示要发送的其他功能，比如`"OJBK"`与`"ERROR"`，这样又扣出来一点存储！

```c
unsigned char cs=0;
unsigned char send=114; bit error=0;
//或许我们可以 #define SEND_NONE 114
void Uart1_Isr(void) interrupt 4 {
    static unsigned char pos,_pos;
	if(RI) {
        switch(cs){
            case 0:
                if(SBUF=='P') {
                    cs++;
                    pos=error=0;
                    send=114;
                }
                break;
            case 1:
                if(SBUF==':') {cs++;}
                else {cs=5; error=1;}//注意出错要跳到case5统一处理
                break;
            case 2:
                if(SBUF<='9' && SBUF >= '0') {
                    pos=SBUF-'0';_pos=pos;
                }
                else if(SBUF==',') cs++;
                else {cs=5; error=1;}
                break;
            case 3:
                if(SBUF=='V') cs++;
                else {cs=5; error=1;}
                break;
            case 4:
                if(SBUF==':') {cs++;}
                else {cs=5; error=1;}
                break;
            case 5:
                if(SBUF<='9' && SBUF >= '0') {
                    segData[pos++]=SBUF-'0';
                    if(pos>=8) pos%=8;
                }
                else if(SBUF=='?') {send=_pos;}
                else if(SBUF==';') { //结束了
                    if(error) send=11;
                    else {
                        if(send > 8) send=10;//OJBK
                    }
                    cs=0;
                }
                break;
        }
        RI=0;
	}
}
```

别忘了在主函数发送数据

```c
if(send != 114) {
    if(send == 10) TransmitData("OJBK");
    else if(send == 11) TransmitData("ERROR");
    else { /* 发 segData[send]+'0' */ }
    send = 114;
}
```

添加超时处理

```c
static unsigned char csTimeout = 0;
if(cs != 0) {
    if(++csTimeout > 30) { cs = 0; csTimeout = 0; } // 3秒无完整帧则重置
} else {
    csTimeout = 0;
}
```

### E2PROM 持久化存储

IIC函数原型:

```c
void I2CStart(void);
void I2CStop(void);
void I2CSendByte(unsigned char byt);
unsigned char I2CReceiveByte(void);
unsigned char I2CWaitAck(void);
void I2CSendAck(unsigned char ackbit);
```
**读取**

根据**时序图**，我们需要依次进行如下操作:

```c
unsigned char ReadData(unsigned char addr) {
	unsigned char dat;
	I2CStart();
    I2CSendByte(0xA0); //addressing & WRITE
    I2CWaitAck();
    I2CSendByte(addr);
    I2CWaitAck();
    
    I2CStart();
    I2CSendByte(0xA1);//addressing & READ
    I2CWaitAck();
    dat = I2CReceiveByte();
    I2CSendAck(1);
    I2CStop();
    return dat;
}
```

**存储**

根据**时序图**，我们需要依次进行如下操作:

注意存储操作之间最好要间隔`10ms`，防止存储失败.

```c
void SaveData(unsigned char addr,unsigned char dat) {
	I2CStart();
    I2CSendByte(0xA0); //addressing & WRITE
    I2CWaitAck();
    I2CSendByte(addr);
    I2CWaitAck();
    I2CSendByte(dat);
    I2CWaitAck();
    I2CStop();
}
```

Gemini老师让我加这一段：

I2C 读取数据就像是食堂打饭。

- **ACK**：你对阿姨说“再来一勺”，阿姨勺子不收回去，继续给你盛。
- **NACK**：你赶紧摆手说“够了够了”，阿姨这才把勺子收回去，关上菜盆盖子（释放总线）。
- **Stop**：你端着盘子走人。

如果你不摆手说“够了”（NACK），阿姨的勺子一直横在菜盆里，你就没法关盖子走人。

### DS1302 时间存储

函数原型:

```c
void Write_Ds1302_Byte( unsigned char address,unsigned char dat );
unsigned char Read_Ds1302_Byte( unsigned char address );  
```

**读取**

根据**Table 3: Register Address/Definition**:

**对于Second**，BIT6-BIT4存储十位，BIT3-BIT0存储个位，所以需要把BIT6-BIT4取出来乘以10再加低四位. 

**对于Minute**，BIT6-BIT4存储十位，BIT3-BIT0存储个位，所以需要把BIT6-BIT4取出来乘以10再加第四位. 

**对于比较烦的Hour**，

在24小时制下（BIT7为0），BIT5-BIT4存储十位，BIT3-BIT0存储个位，所以需要把BIT5-BIT4取出来乘以10再加第四位. 

在12小时制下（BIT7为1），BIT5指示AM/PM，BIT4存储十位，BIT3-BIT0存储个位，所以需要把BIT4取出来乘以10再加第四位.  如果值不为12的话，BIT5为1则加上12；如果为12的话则BIT5为0加上12（特判12PM与12AM）.

月份、日期与年份比较简单，不复述了.

```c
unsigned char ReadHour(){
    unsigned char temp;
    temp = Read_Ds1302_Byte(0x85) & 0x3F;
    return (temp>>4)*10 + (temp&0x0F);
}
unsigned char ReadMinute(){
    unsigned char temp;
    temp = Read_Ds1302_Byte(0x83);
    return (temp>>4)*10 + (temp&0x0F);
}
unsigned char ReadSecond(){
    unsigned char temp;
    temp = Read_Ds1302_Byte(0x81) & 0x7F;
    return (temp>>4)*10 + (temp&0x0F);
}
```

**写入**

DS1302写入极其简单，这里不讨论这个. 

因为DS1302要开始走时的必要条件是其CH为0，所以需要初始化. 且需要把写保护关掉.

```c
void DS1302Init(){
    unsigned temp = Read_Ds1302_Byte(0x81);
    temp &= ~(0x80);//取出低七位
    Write_Ds1302_Byte(0x8E, 0x00);//关闭写保护
    Write_Ds1302_Byte(0x80, temp);//写
}
```

### 超声波测距

超声波测距的原理是发送一段超声波，看他什么时候回来. 原理很简单，关键是如何计时与细节处理.

发送信号一般由**8 个周期**的 **40kHz** 方波信号构成. 用循环写的话大概就是每个电平保持12us.

>**为什么是 8 个？** 这是一个权衡：如果脉冲太少，接收端的压电晶体可能还没充分起振；如果脉冲太多，发射周期太长会增加盲区距离（即还没发完，回声就回来了）。 
>
>**为什么是 40kHz？40kHz** 正好处于一个“黄金分割点”：既能保证几米到十几米的探测距离，又不至于因为衰减太快而检测不到回波。

```c
void Delay12us() { // 针对 12MHz 晶振的简单延时
    _nop_(); _nop_(); _nop_(); _nop_();
    _nop_(); _nop_(); _nop_(); _nop_();
    _nop_(); _nop_(); _nop_(); _nop_();
}
void StartWave() {
	for(i = 0; i < 8; i++) {
		TX = 1;Delay12us();TX = 0;Delay12us();
	}
}
```

如何计时？一般使用一个定时器负责计时. 以`Timer1`为例.

因为超声波测距较长，我们需要`12T`模式. 此时，定时器里的计数器+1意味着过去了1us. 所以计算公式就是:
$$
机器周期 ：12 / 12,000,000 = 1\mu\text{s}\\
声速 (v)：约 340\text{m/s} = 0.034\text{cm/}\mu\text{s}\\
单程时间：定时器计数值 (\text{temp}) \times 1\mu\text{s} / 2\\
最终公式：距离 D = \text{temp} \times 0.034 / 2 = \mathbf{\text{temp} \times 0.017}
$$


此外，RX在发送完超声波之后会有如下状态:  **低电平**（初始状态）,  **跳变为高电平**（发射超声波的一瞬间）,  **保持高电平**（超声波在空中飞行的过程）,  **跳回低电平**（接收到回声）.

所以需要依次` while(RX == 0);`与`while(TF1==0 && RX==1)`（防止太远了计数器溢出）.

```c
unsigned CalculateDistance() {
    unsigned char temp;
	AUXR &= 0xBF;			//定时器时钟12T模式
	TMOD &= 0x0F;			//设置定时器模式
	TMOD |= 0x10;			//设置定时器模式
	TL1 = 0x00;				//设置定时初始值
	TH1 = 0x00;				//设置定时初始值
	TF1 = 0;				//清除TF1标志
	TR1 = 0;				//定时器1不开始计时
    StartWave();
    while(RX == 0); // 1. 等待 RX 变高（信号发出）
    TR1 = 1;
    while(TF1==0 && RX==1);// 3. 等待 RX 变低（信号回来）或定时器溢出
    TR1 = 0;
    temp = TL1|(TH1<<8);
    return temp*0.017;//单位是cm
}
```

### DS18B20 温度传感器

这部分需要先让DS18B20开始转换温度，再读取温度. 因为这两部需要有`750ms`以上间隔，所以我们把他拆分成两个函数.

OneWire函数原型：

```c
void Write_DS18B20(unsigned char dat);
unsigned char Read_DS18B20(void);
bit init_ds18b20(void);
```

**根据手册INITIALIZATION-ROM COMMANDS-FUNCTION COMMANDS的顺序**：

因为`onewire`上只有DS18B20，所以不需要给出ROM地址，即ROM COMMANDS为`SKIP ROM(0xCC)`.

```c
void StartConvertTemperature() {
	init_ds18b20();
	Write_DS18B20(0xCC);//skip ROM
	Write_DS18B20(0x44);//convetT
}
```

在至少`750ms`后给出FUNCTION COMMANDS的`READ SCRATCHPAD(0xBE)`来读取温度:

注意先给出低八位. 温度最小单位为`1>>4`，所以需要乘上$2^{-4}=0.0625$.

> The data transfer starts with the least significant bit of byte 0 and continues through the scratchpad until the 9th byte...

```c
unsigned int ReadTemperature() {
	unsigned int lo, hi;
	init_ds18b20();
	Write_DS18B20(0xCC);
	Write_DS18B20(0xBE);
	lo = Read_DS18B20();
	hi = Read_DS18B20();
	return (((hi << 8) | lo) * 10) >> 4; //保留一位小数，右移代替浮点运算
}
```

### PCF8591 ADC/DAC

IIC函数原型:

```c
void I2CStart(void);
void I2CStop(void);
void I2CSendByte(unsigned char byt);
unsigned char I2CReceiveByte(void);
unsigned char I2CWaitAck(void);
void I2CSendAck(unsigned char ackbit);
```

**ADC**

根据时序图：

我们先addressing给出control byte，再addressing读取ADC值.

注意需要读取两次：PCF8591 内部有一个**追踪保持电路**。当你发送完控制字节后，它触发的是**上一次**转换结果的采样.

```c
unsigned int GetVoltage() {
	unsigned char temp;
	I2CStart();
	I2CSendByte(0x90); //addresing write
	I2CWaitAck();
	I2CSendByte(0x01); //control byte - read channel 1
	I2CWaitAck();
	I2CStop();
    
	I2CStart();
	I2CSendByte(0x91); //addresing write
	I2CWaitAck();
	temp = I2CReceiveByte(); 
	I2CSendAck(0);
	temp = I2CReceiveByte();
	I2CSendAck(1);
	I2CStop();
	return (unsigned int)(temp*500/255.0);
}
```

但是这样浮点运算较慢，可以考虑用移位代替:
$$
\frac{x}{255} \approx \frac{x + (x \gg 8) + 1}{256}
$$

这种写法利用了 $1/255 = 1/256 + 1/65536 + \dots$ 的级数展开。它依然全是移位和加法，但精度会无限接近于真正的除以 255.

最后可以写成：`return (unsigned int)((temp + (temp >> 8) + 1) >> 8)*500;`

>**ps:数学推导：从等比级数开始**
>
>我们要计算的是 $\frac{1}{255}$。
>
>为了利用位移（也就是 2 的幂次），我们把 $255$ 写成 $256 - 1$：
>
>$$\frac{1}{255} = \frac{1}{256 - 1}$$
>
>然后提取公因子 $\frac{1}{256}$：
>
>$$\frac{1}{255} = \frac{1}{256 \cdot (1 - \frac{1}{256})} = \frac{1}{256} \cdot \frac{1}{1 - \frac{1}{256}}$$
>
>这时候，我们可以套用等比级数的展开公式 $\frac{1}{1-r} = 1 + r + r^2 + r^3 + \dots$（当 $|r| < 1$ 时）。
>
>令 $r = \frac{1}{256}$，展开得到：
>
>$$\frac{1}{255} = \frac{1}{256} \left( 1 + \frac{1}{256} + \frac{1}{256^2} + \frac{1}{256^3} + \dots \right)$$
>
>$$\frac{1}{255} = \frac{1}{256} + \frac{1}{256^2} + \frac{1}{256^3} + \dots$$
>
>**2. 变换为位移运算**
>
>在计算机二进制里，除以 $256$ 就是右移 8 位（`>> 8`），除以 $256^2$ 就是右移 16 位（`>> 16`）。
>
>所以，对于任何一个数 $x$，计算 $\frac{x}{255}$ 就可以展开为：
>
>$$\frac{x}{255} \approx (x \gg 8) + (x \gg 16) + (x \gg 24) + \dots$$
>
>这就是为什么我之前说 $\frac{x}{255} \approx \frac{x + (x \gg 8)}{256}$。因为在 16 位运算中，后面更小的项（如 $x \gg 24$）对结果的影响已经微乎其微了。
>
>**3. 那个“+1”是从哪来的？**
>
>你可能注意到公式里有一个 `+1`：`((val + (val >> 8) + 1) >> 8)`。
>
>这其实不是级数展开自带的，而是**工程上的四舍五入补偿**。
>
>- **纯级数展开**：得到的是一个无限接近但永远**小于**真实值的数（类似于 $0.9999\dots$）。
>- **计算机整除**：计算机的 `>>` 运算是向下取整（Floor）。
>- **加上 0.5 原理**：在整数运算中，如果我们想实现四舍五入，通常会加上除数的一半。在除以 256 的环境下，加上一个偏移量（根据精度不同，有时是 `128`，有时简化为 `1`）是为了让结果在截断时更贴近最接近的整数。

**DAC**

根据时序图，我们先addressing给出control byte，再直接给出对应digit值：

```c
void DAConvert(unsigned char dat) {
    I2CStart();
    I2CSendByte(0x90); //addresising write
    I2CWaitAck();
    I2CSendByte(0x40);
    I2CWaitAck();
    I2CSendByte(dat);
    I2CWaitAck();
    I2CStop();
}
```

### NE555

与超声波测距类似，这里也需要使用定时器，不同的是这里作计数器用.

蓝桥杯板子的NE555输出接在`P3.4`上，所以只能用`Timer0`计数. 而我们只需要数1s内有多少个脉冲，就能算出它的频率了.  **如果与主时钟冲突的话，记得把主时钟换成其他定时器.**

和需要转换与读取分开的温度一样，这里需要两个函数. 第一个开始测量，第二个读取. 注意需要**把杜邦线把`SIG`引脚与`P34`连起来**.

其次需要把定时模式改成计数器模式，修改 **TMOD** 寄存器中的 **$C/\overline{T}$** 位为1.

```c
void StartDetectNE555() {
	AUXR &= 0x7F;			//定时器时钟12T模式
	TMOD &= 0xF0;			//设置定时器模式
	TMOD |= 0x05; 	// 设置为 0000 0101
	TL0 = 0x00;		//设置定时初值
	TH0 = 0x00;		//设置定时初值
	TF0 = 0;		//清除TF1标志
	TR0 = 1;		//定时器1开始计时
    ET0 = 0;
}
unsigned ReadNE555() {
    TR0 = 0;
    return (TH0 << 8) | TL0;
}
```

## 样例

下面是用这个模板写的第15届蓝桥杯省赛代码

[https://github.com/Genkaim/LQ15th-Danpianji/tree/main](https://github.com/Genkaim/LQ15th-Danpianji/tree/main)

