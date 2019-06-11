### 声明常量的关键字
* const
    * 常量：就是常数里量，表示一个常数。如Math.PI
    * 特点：不能被修改，重新赋值。
    * 语法：声明一定要初始化同时进行。
---
### 声明变量的关键字
* let
    * 无变量提升
    * 增加了块级作用域
    * 同一个作用域中，变量不能重复定义。
---
### 解构赋值
* 解开原有的解构，重新赋值的过程，称为解构赋值。
    ```javascript
    let [a,b]=[10,20];
    let {m,n}={m:10,n:20};
    let {x:[y,z]}={x:[10,20]};
    ```
---
### 字符串模板
* 语法：反引号表示字符串的开头和结尾
* 特性：可以引用变量，不需要拼接
* 使用变量：abac${variable}dfagf;
---
### 函数中新增的bind方法
* this指向bind传递的参数（引用类型）
---
### 箭头函数
* 语法
    ```javascript
    ()=>{
      //coding....
    }
    p=>{
      //只有一个参数的时候可以生路小括号
    }
    (p)=>{
    
    }
    ```
* 特性
    * 不改变this指向
    * 没有arguments参数
    * 不能被new关键字调用
---
### 第七种数据类型
* Symbol
    * 语法：let _symbol=Symbol();
    * 作用：生成一个唯一值
---
### Set数据集
* 语法：
    ```javascript
    let _set=new Set();
    _set.add("anything");//添加一个成员
    _set.delete("value");//删除一个成员
    _set.has("value");//放回一个boolean类型值
    _set.clear();//清除所有成员
    ```
* 遍历
    ```javascript
    for(let v of _set){
      console.log(v);
    }
    ```
* 特性：键值对形式存在，键与成员变量相同。
* 利用Set对象的特性可以实现数组去重。
---
### Map
* 语法
    ```javascript
    let _map=new Map();
    _map.set("key","value");//设置键对应的值，如果不存在则添加，如果存在则修改
    _map.get("key");//获取指定的键对应的值
    _map.delete("key");//删除指定的成员
    _map.has("key");//判断是否有该成员
    _map.size;//获取Map的长度
    _map.clear();//清空Map对象
    ```
* 遍历
    ```javascript
    for(let [key,value] of _map){
        
    }
    for(let k in _map.keys()){
      
    }
    ```
### Generator函数
* 语法
```javascript
function* async(){
    yield 'first';
    yield "second";
    yield "third";
    return "end";
}
let _fn=async();//不会执行该函数，而是返回一个Generator对象
_fn.next();//返回一个{value:first,done:false}对象
```
---
### ES6中的面向对象
* 类：类是对 对象的抽象描述|类是对象的模板|类是对象的说明书
* 对象：类的实例
* 构造函数：
    * 使用：通常与new 关键字配合使用。
    * 作用：构造实例对象。
* 语法：
    * class className {}
* 面向对象和面向过程
    * 相同点：都是一种编程方式。
    * 区别：面向对象更高级一些，面向对象基于面向过程。
---
### 属性
* 可以看得见的摸得到真实存在的称之为属性
* 语法:this.attributes;
---
### 方法|行为
* 就是我们面向过程中的函数
* 语法：没有function关键字
---
### 面向对象的链式调用
* 返回当前对象


            





