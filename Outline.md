### Week1

### Day01：基本语法

##### 第一节

* **javascript基础介绍及发展趋势**

  * 又称为：ECMAScript
  * 相对其他任何一门语言讲，javascript最简单，最容易入门。
  * 前端开发工作中必不可少的一个工具
  * 能够结合H5其他技术，开发出各种各样绚丽多彩的UI交互页面
  * 甚至能够解决服务器端解决不了的效果
  * 能够分担服务器端的开发压力，同样也能很大程度的分担服务器端的硬件压力
  * 非强类型脚本语言

* **JavaScript和H5的关系**

  * 广义论及HTML5时，实际指的是包括HTML、CSS和JavaScript在内的一套技术组合。JS是一种页面脚本，通过执行程序脚本片段，可以对页面及页面上的元素进行操作，实现特定的功能与效果。有一些东西，用高级编程语言是实现不了的，而用JS，可能几行代码就可搞定。比如，显示当前系统时间等。html5是html的最新版本是一种页面技术，主要用来做网页的。

* **如何运行JavaScript**

  * 在网页中直接运行
  * document.write、console.log、window.onload

* **变量的概念及基本运算**

  * var、let、const

    * 数学中设：X为...

    * RAM

      ```
      RAM又被称作“随机存储器”，是与CPU直接交换数据的内部存储器，也叫主存（内存）。它可以随时读写，而且速度很快，通常作为操作系统或其他正在运行中的程序的临时数据存储媒介。
      ```

    * ROM

      ```
      ROM又被称为“只读存储器”，ROM所存数据，一般是装入整机前事先写好的，整机工作过程中只能读出，而不像随机存储器那样能快速地、方便地加以改写。ROM所存数据稳定，断电后所存数据也不会改变。
      ```

* **变量命名规则和关键字的介绍**

  * 关键字和保留字的区别
  * 变量和内存关系
  * 变量什么时候被释放
  * 作用域：简单提一下、函数章节精讲

* **赋值、关系、数学运算符的讲解**

* **表达式的概念讲解**

* **变量不同类型之间的自动、手动类型转换**



##### 第二节 强化练习

* 为抵抗洪水，战士连续作战89小时，编程计算共多少天零多少小时？
* 小明要到美国旅游，可是那里的温度是以华氏度为单位记录的。他需要一个程序讲华氏温度80度转为摄氏温度为单位分别显示该温度。

##### 第三节

* 逻辑运算符 ！&& ||
* 自增自减运算符 ++、--
* 八进制和十六进制的介绍:.toString(2);
* NaN的概念及应用
* Number方法的应用

##### 第四节 强化练习

* 计算两个文本框的和
* var k=0;  console.log(k++ + ++k +k +k++)
* 掌握逻辑运算的意义
* 掌握八进制、十六进制的写法
* 掌握NaN的含义
* 掌握Number函数的转换结果

##### 第五节 晚自习

* 用console.log();证明: ! && ||逻辑运算符的优先级
* 将十进制数字11，分别转化为二进制、8进制、16进制
* 检查一个字符串是否是数字类型

* 计算两个文本框的加减乘除
  * 要求：使用parseInt方法类型转换
  * 计算结果使用Math.round方法四舍五入



### Day02、逻辑分支

##### 第一节

* 分支结构

  ```
  if(condition){//condition:boolean condition：可以是任意表达式或者变量或者函数或者对象，最终的值必须可以转化为boolean就可以
      //TODO:
  }
  ```

  ```
  if(condition){//condition:boolean
      //TODO:
  }else{
      //TODO:
  }
  ```

  ```
  if(condition){//condition:boolean
      //TODO:
  }else if(condition){
      //TODO:
  }
  ```

  ```
  switch(_var){
      case _value1:
      	//TODO:
      	
      	break;
      case _value2:
      	//TODO:
      	
      	break;
      ·
      ·
      ·
      ·
      default:
      	//TODO:
      	
      	break;
  }
  ```

##### **第二节 练习**

```
//先阅读，然后在电脑上敲一遍试一下，看看自己到底懂了没有，要自己敲代码，不能复制，复制永远是别人的。
if(2>3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(2>3===false){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!2>3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(2>!3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(2||3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!2||3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!2||!3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(2&&3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!2&&3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!2&&!3){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!2&&!3||!0){
    console.log("请问本句话能否输出在控制台?为什么？");
}
if(!0||!2&&!3){
    console.log("请问本句话能否输出在控制台?为什么？");
}

//一下这段代码的输出结果是什么，为什么？
//接着把下面的代码改写为if--else if---....else结构
switch(8>>2){
    case 8:
        console.log(8);
        break;
    case 7:
    	console.log(7);
    	break;
    case 6:
        console.log(6);
        break;
    case 5:
        console.log(5);
        break;
    case 4:
        console.log(4);
        break;
    case 3:
        console.log(3);
        break;
    case 2:
        console.log(2);
    case 1:
        console.log(1);
        break;
    case 0:
        console.log(0);
        break;
    defautl:
    	console.log(“以上结果都不对”);
    	break;
}
```

* 判断一个整数，属于哪个范围：大于0；小于0；等于0
* 判断一个整数是偶数还是奇数，并输出判断结果
* 开发一款软件，根据公式（身高-108）*2=体重，可以有10斤左右的浮动。来观察测

##### 第三节

* if判断接受的数据类型
  * boolean、number、string、undefine、null、object
* 案例：输入年份，计算某一年是否是闰年
  * window.prompt
* 案例：输入数字，显示星期几
  * Date对象
  * getMonth()+1
  * getTime()
  * 格式化日期

##### 第四节 练习

* 案例：输入分数，判定成绩等级(if和switch两种写法)
* 输入月份，显示当月的天数
  * 要求：利用case穿透简化代码

##### 第五节 练习

* 根据一个数字日期，判断这个日期是这一年的第几天。例如： 20160211，计算后结果为42



### Day3 、 循环结构

##### 第一节：精讲（90分钟）

* 循环的概念和意义
  * 什么时候用循环
  * 循环的意义
* while循环的使用
* continue关键字
* while和do-while的区别
* for循环的使用
* 入职薪水10K，每年涨幅5%，50年后工资多少？
* 打印100以内 7的倍数
* 打印100以内的奇数

##### 第二节 练习

* 打印100以内所有偶数的和

* 求出1-1/2+1/3-1/4…..1/100的和 var i=1; 

* 打印出1000-2000年中所有的闰年，并以每行四个数的形式输出

* 打印三角形、正方形、菱形、长方形、六边形

  ```
  *
  **
  ***
  ****
  *****
  ```

##### 第三节

* break关键字
* for循环的嵌套
* 死循环的概念及作用
* Firefox和Chrome和IE浏览器的 Debug工具使用
* 打印100–200之间所有能被3或者7整除的数
* 计算100的阶乘
* 求100-999之间的水仙花数 abc=a^3+b^3+c^3
* 打印九九乘法表

##### 第四节 练习

* 输出100-200之间所有的素数
* 求1+2!+3!+...+20!的值
* 完成一个三角形打印功能
* 完成一个梯形打印功能

##### 第五节 练习

* 篮球从5米高的地方掉下来，每次弹起的高度是原来的30%，经过几次弹起，篮球的高度是0.1米。
* 有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，第三个里面放4，棋盘上放的所有芝麻的重量

##### 周四练习



### Day4、函数（上）

##### 第一节：精讲（90分钟）

* 函数的概念及作用
  * 函数是指一段在一起的、可以做某一件事儿的程序。
  * 在OOP编程中叫方法或行为
  * 为什么要用函数
    * 可重复使用、一定程度上减少代码量
    * 提升代码可读性
    * 高内聚、低耦合
* 函数的编写
* 事件的概念种类及作用
  * 事件是文档或者浏览器窗口中发生的，特定的交互瞬间。
  * 种类：
    * 键盘事件（keydown、keyup）、鼠标事件：（onclick.....）
* 事件和函数的关系，以及综合运用
* 函数和循环结合打印九九乘法表
* 函数的好处
* 参数的声明
* 参数的传递

##### 第二节：强化练习（90分钟）

* 编写一个函数，计算两个数字的和、差、积、商
  * 要求：使用传参的形式

* 编写一个函数，计算三个数字的大小，按从小到大顺序输出

##### 第三节：精讲（120分钟）

* 函数的两种创建方式：声明式和赋值式
* JS的编译和执行
* 变量的声明提升
* 形参和实参
* return关键字

##### 第四节：强化练习（120分钟）

* 编写任意个数字的求和、差、积、商的函数
* 编写生成4位数字验证码的函数，并生成10次，同时将结果存入数组

##### 第五节：强化练习（120分钟）

* 编写一个函数，计算任意两个数字之间所能组成的奇数个数，数字必须是个位数。比如： 计算0-3之间能组成的奇数个是01、21、03、13、23、31
* 某个公司采用公用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如下：每位数字都加上5,然后用除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换，请编写一个函数，传入原文，输出密文



### Day5. **函数（下）**

##### 第一节：精讲（90分钟）

* 作用域
* 局部作用域和全局作用域
* 递归函数

##### 第二节：强化练习（90分钟）

* 利用递归求100的阶乘
* 利用递归求斐波那契数列
* 利用递归求两个数字的最大公约数



##### 第三节：精讲（120分钟）

* 函数的简单介绍
* 利用事件触发函数执行
* 常见事件触发函数
* 构造函数及对象类型（了解）

##### 第四节：强化练习（120分钟）

* 编写一个函数，输入n为偶数时，调用函数求1/2+1/4+...+1/n,当输入n为奇数时，调用函数求/1+1/3+...+1/n 
* 使用函数完成任意数字阶乘的计算
  * 要求：页面输入任意数字，点击按钮后计算阶乘

##### 第五节：综合应用（120分钟）



### 周日练习

* 常见事件与函数的结合(可将信息打印在控制台)

![image-20190215174738718](/Users/ghost/Library/Application Support/typora-user-images/image-20190215174738718.png)





### **Week2**

### **Day1.** **数组** 

##### 第一节：精讲（90分钟）

* 数组的概念及定义(引用类型)

 * 构造函数的简单介绍new Array()
 * 讲明引用类型和基础类型的不同（内存方面）
 * 数组的操作（push\pop\unshift\shift）
 * 数组的遍历
 * 整数数组/字符串数组/对象数组/二维数组

##### 第二节：强化练习（90分钟）

* 山上有一口缸可以装50升水，现在有15升水。老和尚叫小和尚下山挑水，每次可以挑5升。问：小和尚要挑几次水才可以把水缸挑满？通过编程解决这个问题。

* 定义一个含有30个整型元素的数组，按顺序分别赋予从2开始的偶数；然后按顺序每五个数求出一个平均值，放在另一个数组中并输出。试编程。

* 通过循环按行顺序为一个5×5的二维数组a赋1到25的自然数，然后输出该数组的左下半三角。试编程。

##### 第三节：精讲（120分钟）

* for-in循环
* 数组的排序（冒泡、选择）
* 函数的值传递和引用传递
* 堆和栈及索引思维
* 对象的本质和意义
* JSON表示对象的方法
* 随机点名程序

##### 第四节：强化练习（120分钟）

* 随机生成一个五位以内的数，然后输出该数共有多少位，每位分别是什么
* 数组的冒泡排序
* 数组的选择排序
* 编写函数map(arr) 把数组中的每一位数字都增加30%
* 编写函数has(arr , 60) 判断数组中是否存在60这个元素，返回布尔类型

##### 第五节：强化练习（120分钟）

* 编写函数norepeat(arr) 将数组的重复元素去掉，并返回新的数组
* 有一个从小到大排好序的数组。现输入一个数，要求按原来的规律将它插入数组中。
* 使用JSON形式创建一个对象，该对象存储一个学生的信息，该对象包含学号、身份证、年龄、性别、所学专业等属性信息，同时该对象包含一个自我介绍的方法，用来输出该对象的所有信息
* 扩展案例：以下是某班级一次考试的成绩表。请计算每个学生总成绩，并按总成绩排名。统计各单科成绩第一名，输出其成绩与学号。

| 学号 | 语文  | 数学 | 英语 | 总成绩 | 备注 |
| ---- | ----- | ---- | ---- | ------ | ---- |
| 1    | 105   | 62   | 118  |        |      |
| 2    | 89    | 78   | 120  |        |      |
| 3    | 86    | 64   | 80   |        |      |
| 4    | 78    | 99   | 91   |        |      |
| 5    | 107.5 | 97   | 70   |        |      |
| 6    | 112   | 61   | 92   |        |      |
| 7    | 101   | 79   | 104  |        |      |
| 8    | 71    | 72   | 105  |        |      |
| 9    | 56    | 68   | 61   |        |      |
| 10   | 98    | 83   | 77   |        |      |



### **Day2. ES5/String**

##### 第一节：精讲（90分钟）

* 严格模式：“use strict”

  * 变量必须使用var声明，杜绝不小心将局部变量声明成一个全局变量

  * 对超出权限的操作显示报错，不再做静默失败处理

    * 比如给NaN赋值

  * 禁止删除变量和对象中不可删除的属性，显示报错

  * 通过var声明的变量是不可删除的，在常规模式下，试图删除会静默失败，但在严格模式下会显式抛出异常；同样的，试图删除对象中不可删除的属性也会显式报错

    ```
    'use strict';
    var myVariable = 3;
    delete myVariable;  //Uncaught SyntaxError: ...
     
    delete Object.prototype;  //Uncaught TypeError: ...
     
    var person = {};
    Object.defineProperty(person, 'name', {
      configurable: false,
      value: 'Scott'
    });
     
    delete person.name; //Uncaught TypeError: ...
    ```

  * 禁止函数参数重名

  * 禁止使用八进制数字

  * 禁止使用with语句

  * 禁止this指向全局

* ES5新增数组常见方法（indexof/forEach/map/reduce/filter）

  ```
  var arr = [
    {"name":"apple","count": 2},
    {"name":"orange","count": 5},
    {"name":"pear","count": 3},
    {"name":"orange","count": 16}
  ];
  var newArr = arr.filter(function(item){
    return item.name ==="orange";
  });
  =====================================================
  var arr = [1,2,3,4,5,6,7,8];
  arr.forEach(function(item,index){
  	console.log(item);
  });
  =====================================================
  let names = [ 'Will', 'Jack', 'Peter', 'Steve', 'John', 'Hugo', 'Mike' ]
  let newSet = names
    .map((name, index) => {
      return {
        id: index,
        name: name
      }
    });
  =====================================================
  var arr = ["apple","orange","banana"];
  
        function noPassValue(){
          return arr.reduce(function(prev,next){
            console.log("prev:",prev);
            console.log("next:",next);
            return prev + " " +next;
          });
        }
  
        function passValue(){
          return arr.reduce(function(prev,next){
            console.log("prev:",prev);
            console.log("next:",next);
            prev[next] = 1;
            return prev;
          },{abc:1});
        }
  
        console.log("No Additional parameter:",noPassValue());
        console.log("----------------");
        console.log("With {} as an additional parameter:",passValue());
  ```

  

* 字符串的两种创建方式（常量和构造函数）

* 字符串常见API(charAt\ indexOf\substring\slice\split\replace)

##### 第二节：强化练习（90分钟）

* 敏感词过滤
* 密码格式要求
* 留言过滤

![pastedGraphic.png](/Users/ghost/Library/Application Support/typora-user-images/5CFC9041-B17F-492A-9E9A-B64B7F56A814/pastedGraphic.png)

##### 第三节：精讲（120分钟）

* ASCII码和字符集

* 字符串常见API(charCodeAt\fromCharCode\)

##### 第四节：强化练习（120分钟）

* 统计字符串中每个字符的个数？

##### 第五节：强化练习（120分钟）

* 数字字母混合验证码

![image-20190215175452000](/Users/ghost/Library/Application Support/typora-user-images/image-20190215175452000.png)

* aabccd统计每个字符出现的次数，结果显示 a 2、b 1、c 2、d1，去掉重复的字符，使结果显示 abcd



### **Day3. Math / Date** 	

##### 第一节：精讲（90分钟）

* Math内置对象的常见API()
* 三角函数复习
* 勾股定理复习
* 曲线方程复习(一元二次方程)
* 随机数如何设定范围
* 十进制数字转16进制或8进制

##### 第二节：强化练习（90分钟）

* 编写一个函数，获得一个十六进制的随机颜色的字符串(例如：#20CD4F)

##### 第三节：精讲（120分钟）

* 日期对象创建
* 将日期格式化成字符串

* 日期转为毫秒数
* 计算两个日期的时间差值
* 日期函数封装(dateUtil.js)(封装常见功能)

##### 第四节：强化练习（120分钟）

* 倒计时

##### 第五节：强化练习（120分钟）

* 数码时钟

![image-20190215175542196](/Users/ghost/Library/Application Support/typora-user-images/image-20190215175542196.png)



### **周四练习** **：**

### **Day4. BOM / DOM** 

##### 第一节：精讲（90分钟）

* BOM概念
* window对象介绍
* window内置对象(location/history/navigator)及方法
* onload事件
* 定时器

##### 第二节：强化练习（90分钟）

* 广告弹出窗(自动关闭)

![image-20190215175650200](/Users/ghost/Library/Application Support/typora-user-images/image-20190215175650200.png)

##### 第三节：精讲（120分钟）

* window.onscroll事件
* DOM的概念及作用
* DOM的基本操作(查询、修改、创建、删除)
* DOM元素类型(元素和文本)

##### 第四节：强化练习（120分钟）

* 顶部悬浮
* 回到顶部
* 动态创建表格

##### 第五节：强化练习（120分钟）

* 表格删除操作



### **Day5. DOM** 下

##### 第一节：精讲（90分钟）

* 自定义属性及getAttribute方法
* outerHTML/innerText (非W3C)
* childNodes/过滤空白节点
* 高级选取firstChild/lastChild/parentNode/previousSibling/nextSibling

##### 第二节：强化练习（90分钟）

* 进度条

![image-20190215175755070](/Users/ghost/Library/Application Support/typora-user-images/image-20190215175755070.png)

* 隔行变色

##### 第三节：精讲（120分钟）

* 获取非行内样式（兼容问题）
* createTextNode文本节点
* box.insertBefore(newNode, existNode)
* offsetWidth/offsetHeight
* offsetLeft/offsetTop
* 配合css过度效果的特效；

##### 第四节：强化练习（120分钟）

* 网页换肤
* 简易年历
* 自动登录勾选

1. ![image-20190215175846529](/Users/ghost/Library/Application Support/typora-user-images/image-20190215175846529.png)

##### 第五节：强化练习（120分钟）

* 点击按钮换图片
* tab切换案例
* **扩展案例：** QQ延迟提示框





### Week 3

### DAY1：Event事件上

##### 第一节：精讲（90分钟）

* event概念及作用
* 获取方式（兼容问题）
* event.button属性介绍
* clientX/clientY属性介绍
* offsetX、offsetY属性介绍
* pageX、pageY属性介绍

##### 第二节：强化练习（90分钟）

* 光标的实时显示

![pastedGraphic.png](/Users/ghost/Library/Application Support/typora-user-images/C54E50F2-8CA8-4FE9-AE93-285AA0DED458/pastedGraphic.png)

* 跟随鼠标的提示框

![image-20190215180415918](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180415918.png)

* 输入框默认提示

![image-20190215180428083](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180428083.png)

* 扩展案例：表格的即时编辑

##### 第三节：精讲（120分钟）

* 键盘事件（keyup、keydown、keypress）

* 组合键ctrlKey、altKey
* keyCode/which兼容
* 事件的冒泡

##### 第四节：强化练习（120分钟）

* CSS模拟下拉菜单

![image-20190215180444771](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180444771.png)

##### 第五节：强化练习（120分钟）

* 聊天对话框

![image-20190215180458224](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180458224.png)

### **DAY 2 . Event**事件下

##### 第一节：精讲（90分钟）

* 浏览器的默认行为
* 阻止默认行为（兼容）e.preventDefault()  e.returnValue=false
* 事件监听器（兼容）addEventListener attachEvent   removeEventListener || detachEvent()
* 事件捕获

##### 第二节：强化练习（90分钟）

* 掌握兼容问题

* 自定义右键菜单

* 掌握事件监听的封装

* 掌握冒泡和捕获的区别

##### 第三节：精讲（120分钟）

* 事件委托机制
* 拖拽效果（onmousedown/onmousemove/onmouseup）
* 鼠标滚轮事件 onmousewheel，模拟滚动条、
* 复习并深入JSON对象/构造函数

##### 第四节：强化练习（120分钟）

* 鼠标移动轨迹
* 弹出窗口拖拽
* **扩展案例：**拖拽轨迹回放

##### 第五节：强化练习（120分钟）

* 单元格拖拽交换位置

![image-20190215180514326](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180514326.png)





### DAY3：正则及表单验证

##### 第一节：精讲（90分钟）

* 正则的概念
* 创建方式 new RegExp /jk/
* 正则表达式
* 字符串replace函数
* 字符串match函数
* 字符串search函数

##### 第二节：强化练习（90分钟）

* 掌握正则的创建方式
* 掌握正则表达式语言
* 邮政编码检测
* 文件格式检测
* 字符串首尾去空格
* 邮件格式检测

##### 第三节：精讲（120分钟）

* 手机号检测
* 身份证检测
* 日期检测
* 中文检测 \u4e00-\u9fa5
* 用户名检测
* 字符串过滤
* 正则$符的应用

##### 第四节：应用（120分钟）

* 表单及AJAX的综合应用

![image-20190215180533081](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180533081.png)

##### 第五节：综合应用（120分钟）

* 掌握正则的封装
* 掌握综合表单验证



### DAY4：ES5及ES6

##### 第一节：精讲（90分钟）

* 严格模式
* bind方法/this关键字
* JSON.parse/JSON.stringify
* let/const
* 变量解构
* 字符串扩展

##### 第二节：应用（90分钟）

* 掌握ES5内容

##### 第三节：精讲（120分钟）

* let\const关键字

* =>函数
* 解构赋值
* 字符串扩展方法
* Symbol类型
* Set和Map结构
* Generators生成器函数
* 掌握class的写法及继承

##### 第四节：应用（120分钟）

* 了解class面相对象编程
* 掌握ES6语法的灵活运用

##### 第五节：综合应用（120分钟）

* 封装拖拽效果
* 封装常见兼容



### DAY5：DOM高级操作

##### 第一节：精讲（90分钟）

* 运动原理
* 边界处理
* 加速减速
* 透明度运动

##### 第二节：强化训练（90分钟）

* 抛物线的重力回弹
* 图片的淡入淡出

##### 第三节：精讲（120分钟）

* 多属性缓冲运动函数封装
* 圆周运动

##### 第四节：强化训练（120分钟）

* 侧边栏分享广告

##### 第五节：强化训练（120分钟）

![image-20190215180549029](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180549029.png)



##### **周日练习**

* 掌握事件流的概念
* 掌握兼容的解决方案
* 掌握事件委托的应用场景
* 鼠标跟随特效

![image-20190215180602001](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180602001.png)

* 扩展案例：滑动条拖拽

![image-20190215180612903](/Users/ghost/Library/Application Support/typora-user-images/image-20190215180612903.png)





### **Week 4**

### DAY1： 面相对象编程

##### 第一节：精讲（90分钟）

* 构造函数的使用
  * 构造函数 ，是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。
* 构造函数和对象的关系
* 使用Json创建对象
* 使用构造函数创建对象
* 面相对象和面相过程的区别

##### 第二节：强化练习（90分钟）

* 掌握面相对象编程的好处
* 轮播图 | 选项卡 面相对象改造

##### 第三节：精讲（120分钟）

* 类的概念
* 类和对象
* JSON字符串和对象直接的转换

##### 第四节：强化练习（120分钟）

* 烟花效果案例

##### 第五节：强化练习（120分钟）

* 萤火虫案例



### DAY2：面向对象案例1

##### 第一节：精讲（90分钟）

* 购物车(localStroage)

##### 第二节：强化训练（90分钟）

* 抛物线添加购物车

![pastedGraphic.png](/Users/ghost/Library/Application Support/typora-user-images/C353E176-E4C4-447A-8D82-D8332B014F50/pastedGraphic.png)

##### 第三节：精讲（120分钟）

* 简单幻灯片切换
* 无缝切换

##### 第四节：强化练习（120分钟）

* 掌握幻灯片制作

##### 第五节：综合应用（120分钟）



### DAY3：面向对象案例 2

##### 第一节：精讲（90分钟）

* 评分特效
* 简单放大镜
* 进阶放大镜

##### 第二节：应用（90分钟）

![image-20190215183853126](/Users/ghost/Library/Application Support/typora-user-images/image-20190215183853126.png)

##### 第三节：精讲（120分钟）

* 固定列数的瀑布流
* 自适应瀑布流

##### 第四节：应用（120分钟）



### DAY4：回顾与总结

##### 第一节：精讲（90分钟）

##### 第二节：应用（90分钟）



##### 第三节：精讲（120分钟）

##### 第四节：应用（120分钟）

##### 第五节：综合应用（120分钟）





### DAY5：考试



**周日练习**

1. 打砖块(请使用面相对象完成)

![image-20190215183952923](/Users/ghost/Library/Application Support/typora-user-images/image-20190215183952923.png)







### **Week 5**

### **Day1. PHP** **mySQL**

##### 第一节 ：精讲(90分钟):

* Apache服务器。（端口号定义，http协议，开启和关闭）
* webserver原理。
* 集成环境安装。
* php运行环境介绍。

##### 第二节：强化练习（90分钟）

* 将练习项目放在apache环境下，利用本机ip让其他同学访问该页面。
* 启动关闭集成环境。
* 编写php代码，输出hello world;
* 整理并理解概念

##### 第三节：精讲（90分钟）

* 数据库概念（数据库，表，主键）
* 数据类型;
* navcat 操作数据库；
* navcat 数据导入。

##### 第四节：强化练习(90分钟)

* php 生成动态网页。
* for循环生出数组，输出json。
  * json结构 
  * php 链接mySql
* php + mySql (sql 语句 增删改查) 



###   Day2. Cookie及http协议

##### 第一节：精讲（90分钟）

* HTTP
* cookie的概念
* cookie的特点
* cookie的使用

##### 第二节： 强化练习（90分钟）

* 一周内免登陆
* 商品浏览记录

##### 第三节：精讲（120分钟）

* cookie的封装
* 简单购物车的应用

##### 第四节：强化练习（120分钟）

* 照片墙的记录

* 购物车的多条记录保存

##### 第五节：强化练习（120分钟）

* 掌握cookie 的安全策略
* 掌握cookie 的封装
* 掌握cookie跟json的配合


 	

### Day3. AJAX

##### 第一节：精讲(90分钟)  

* ajax的概念
* ajax的优势
* 编写步骤
* 回调函数
* 编写服务器接口

#####  第二节：强化练习（90分钟）

* 验证用户名是否存在



![pastedGraphic.png](/Users/ghost/Library/Application Support/typora-user-images/108106F7-7914-4EE3-A459-5F182993B188/pastedGraphic.png)

* 搜索下拉提示

![image-20190215191112255](/Users/ghost/Library/Application Support/typora-user-images/image-20190215191112255.png)

##### 第三节：精讲（90分钟）

* JS解析JSON
* 局部数据刷新
* 事件委托的应用
* 前后端分离



#####    第四节：强化练习(90分钟)

* 加载更多
* AJAX瀑布流（面向对象）
  * 注：使用AJAX练习时，后台接口使用的语言不做限制，但大纲中要求的接口必须都要讲解。



### **Day4. ajax/promise**

##### 第一节：精讲（90分钟）

* 回调函数的嵌套
* ajax的依赖调用
* Promise介绍
* promise改造ajax依赖调用 

##### 第二节：强化练习（90分钟）

* 掌握ajax依赖调用
* 掌握回调函数的应用
* 掌握Promise规范

##### 第三节：精讲（90分钟）

* ajax的同源策略
* jsonp跨域
* 服务器端跨域
* get和post提交
* 兼容问题

##### 第四节：强化练习（90分钟）

* 请求天气预报
* 请求淘宝或百度搜索下拉提示

![image-20190215191503528](/Users/ghost/Library/Application Support/typora-user-images/image-20190215191503528.png)

##### 第五节：综合应用（120分钟）

* 京东商品评论列表（面向对象）

![image-20190215191538380](/Users/ghost/Library/Application Support/typora-user-images/image-20190215191538380.png)



### Day5 .AJAX交互项目（bootstrap）

<https://github.com/huaizhiY/wrongQuestion/tree/master>   (demo地址)

demo中有三个分支 

lay-out -> 使用bootstrap 布局;

master -> 完整案例：

mysql -> php + mysql 教学案例;

##### 第一节：精讲(90分钟)

* bootstrap栅格布局；
* bootstrap 文档查阅及使用。	
* bootstrap编写错题表布局
* bootstrap JavaScript特效

##### 第二节：强化练习(90分钟)

* bootstrap编写错题表布局

##### 第三节:精讲(90分钟)

* php后台接口编写，php+mySQL接口定义规范，可以增删改查。

* 接口测试
* 前后台联调;

##### 第四节：强化练习

* 前后台配合实现功能；
* 前后台联调；

* 错题表：
  * 可以添加错题和疑难问题，进入页面即展示。
  * 提供已经记住，删除功能，在数据库中删除对应错题。
  * 可以添加内容，更新错题表。
  * 要求配合bootstrap



**周日练习**

1. ​	1.智能问答机器人（ajax）

![image-20190216030235522](/Users/ghost/Library/Application Support/typora-user-images/image-20190216030235522.png)





### **Week 6**

### DAY1：闭包和继承

##### 第一节：精讲（90分钟）

* 什么是闭包
* 闭包的特点
* 闭包的原理
* 闭包的应用场景

##### 第二节：强化练习（90分钟）

* 掌握闭包的特点和原理

* 掌握闭包的应用场景

##### 第三节：精讲（120分钟）

* 构造函数继承
* call/apply继承
* prototype的概念
* 原型链继承
* 混合继承

##### 第四节：强化练习（120分钟）

* 掌握继承的原理

##### 第五节：强化练习（120分钟）



### DAY2：购物车 

* cookie模拟登陆
* LocalStroage 模拟数据
* ES6编码
* 模块化 => cookie登陆验证

​		  => localStroage 数据



### DAY3：设计模式

##### 第一节：精讲（90分钟）

* 单例模式

* 组合模式
* 观察者模式

##### 第二节：强化练习（90分钟）

##### 第三节：精讲（120分钟）

* 工厂模式
* 抽象工厂模式
* 策略模式
* 代理模式
* 适配器模式

##### 第四节：强化练习（120分钟）

* 手动封装前端路由

##### 第五节：综合应用（120分钟）



### DAY4：插件编写及JQ入门

##### 第一节：精讲（90分钟）

* 弹出层插件
* 轮播图插件
* ajax插件

##### 第二节：强化练习（90分钟）

* 掌握原生JS插件编写的原理
* 掌握prototype的运用

##### 第三节：精讲（120分钟）

* 选择器插件
* JQ选择器
* JQ属性
* JQ动画

##### 第四节：强化练习（120分钟）

* 树形目录

##### 第五节：强化练习（120分钟）

* 掌握JQ的使用
* 通过插件编写，理解JQ的封装原理



### DAY5、Jquery进阶

##### 第一节：精讲（90分钟）

* 遍历
* Ajax
* DOM操作

##### 第二节：应用（90分钟）

* 图片轮播
* 手风琴

![pastedGraphic.png](/Users/ghost/Library/Application Support/typora-user-images/919DF7EF-F154-4845-AB7B-CD45B7EB2F34/pastedGraphic.png)

##### 第三节：精讲（120分钟）

* 图片翻转
* 瀑布流
* 九宫格拖拽

##### 第四节：应用（120分钟）

![image-20190216031024039](/Users/ghost/Library/Application Support/typora-user-images/image-20190216031024039.png)

##### 第五节：综合应用（120分钟）

* 掌握Jquery的常见API



### Week 7

### DAY1：Jquery实战

##### 第一节：精讲（90分钟）

* 自定义插件编写
* 跟随鼠标划入特效

##### 第二节：强化练习（90分钟）

 ![image-20190216031126789](/Users/ghost/Library/Application Support/typora-user-images/image-20190216031126789.png)

##### 第三节：精讲（120分钟）

* JqueryUI (autoComplete/draggable/datepicker/dialog)



##### 第四节：应用（120分钟）

![image-20190216031151595](/Users/ghost/Library/Application Support/typora-user-images/image-20190216031151595.png)

##### 第五节：综合应用（120分钟）

* 掌握JQ的自定义插件编写
* 掌握基于JQ的第三方扩展插件如何使用





### DAY2：nodejs及路由

##### 第一节：精讲（90分钟）

* Nodejs简介及COMMONJS模块化规范 
* npm , nrm  工具使用；
* nodemon 测试工具使用
* 内置模块 http , fs , path 根据需求进行讲解
* 文档查看。

##### 第二节：强化练习（90分钟）

* 使用npm下载外部模块

##### 第三节：精讲（120分钟）

* Nodejs, http服务搭建

* Nodejs路由搭建

##### 第四节：应用（120分钟）

* Nodejs 路由





### DAY3：Gulp

##### 第一节：精讲（90分钟）

* gulp介绍
* 工程化的作用
* Node环境安装
* NPM命令(npm install  npm init  npm uninstall …)
* gulp安装
* gulp插件安装（编译/压缩/合并/即时刷新/）

##### 第二节：应用（90分钟）

* 改造飞机大战的JS文件，压缩，合并。
* 掌握NPM命令的使用

##### 第三节：精讲（120分钟）

* gulp-babel插件 
* Gulp
* ES6 模块化讲解 
* Gulp官方插件网站找寻插件。（gulp-sass-china）

##### 第四节：应用（120分钟）

* ES6编码翻译转化为ES5

##### 第五节：综合应用（120分钟）

* 掌握gulp工具的使用；
* 掌握gulp-babel的使用；
* gulp-connect  http-proxy-middleware  服务器及代理 



### DAY4：SASS

##### 第一节：精讲（90分钟）

* Sass介绍
* 环境搭建及编译指令搭建gulp-sass-china环境；让gulp实现自动编译环境；
* Sass-导入
* Sass-嵌套
* Sass-变量定义
* Sass-判断语句 
* Sass-数组/map
* Sass-循环语句
* Sass-mixin函数
* Sass-function介绍

##### 第二节：应用（90分钟）

* 封装sass兼容函数；
* 用sass做简单的布局。

##### 第三节：精讲（120分钟）

* requireJS模块化开发
* AMD和CMD规范

##### 第四节：应用（120分钟）

* 掌握requireJS的使用
* 掌握模块化的思想
* 掌握AMD规范
* ES6module 规范(浏览器已经支持)

##### 第五节：综合应用（120分钟）

* 掌握模块化开发,掌握sass使用；



### DAY5：git

##### 第一节：精讲（90分钟）

* git和SVN的区别
* Git Bash使用（命令行）
* git的命令行使用
* Git 本地操作（add commit status  --reset hard refglog） 实际操作；
* 注册gitHub账号

##### 第二节：应用（90分钟）

* 在本地实现git版本操作；
* 注册github账号。

##### 第三节：精讲（120分钟）

* git分支结构(branch checkout merge )
* Git提交远程分支( git push origin 本地分支:远程分支)
* Git 获取远程代码( clone pull )
* gitignore使用
* git提交gulp构建的项目；

##### 第四节：应用（120分钟）

* 提交并创建分支下载远程分支，建立项目结构(gulp 项目结构)；

##### 第五节：综合应用（120分钟）

* 将选好的项目建立结构托管到github上；