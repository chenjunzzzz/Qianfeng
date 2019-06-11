### 条件语句
* 语法：
```javascript
    if(2>3){
        //Coding....
        //关键字：if
        //括号内是判断条件
        //大括号是：条件语句块
    }
```
* 使用：
---
### 分支语句
* 语法：
```javascript
if(2>3){
    //Coding....
    //关键字：if
    //括号内是判断条件
    //大括号是：条件语句块
}else{
    //关键字:else
    //分支语句
}
```
* 使用：
---
### else if 选择分支语句
* 语法：
```javascript
if(2>3){
    
}else if(2>1){
    
}else if(2>0){
    
}else{
    
}
```
* 使用：
---
### switch 分支语句
```javascript
var express=0;
switch(express){
    case value1:
        //Coding....
        break;//结束当前代码块，一个大括号为一个代码块
    case value2:
        //Coding
        break;
    default:
        //Coding
        break;
}
```
* 使用：
---
### Date介绍

* 作用：对象用于处理日期和时间
* 通过一个关键字：new Date()这样的方式创建一个日期对象;
    * 调用Date类的构造函数
    * 构造函数的作用：用来构造对象
* 日期对象：
    * 年月日-时分秒-毫秒，星期几
    * getFullYear();
    * getMonth():比实际月份小1。
    * getDate();//得到当前日期
    * getHours();//得到小时
    * getMinutes();//得到分钟数
    * getSeconds();//得到秒
    * getMilliseconds();//得到当前的多少毫秒
    * getDay();//返回值是周几
    * getTime();//从1970-01-01到今天，相差事件的总毫秒数;getTime很有用

---
