### 事件的概念
* 表示发生一个动作，或者一种“行为”后产生有影响的事
---
### 常用的事件
* 窗体事件
    * window.onload：等待HTML文档全部加载完成后执行onload事件，否则会出现获取不到节点
    * window.onresize：窗体尺寸发生改变的时候
    * window.onscroll：窗体滚动条位置发生改变
* 鼠标事件
    * onclick：
    * oncontextmenu：鼠标右键
    * onmousedown：
    * onmouseup：
    * onmousemove：持续触发，只要鼠标位置发生改变时就会触发该事件
    * onmouseover：鼠标悬停
    * onmouseout：鼠标移除
    * onmousewheel：鼠标滚轮发生改变的时候触发
        * e.wheelDelta||e.detail
* 键盘事件  
    * onkeypress
    * onkeydown
    * onkeyup
---
### 事件对象
* window.event
   * event.keyCode || event.which：获取的是键码值
   * event.ctrlkey、event.altkey：
   * e.key:获取的是键盘的字符
   * e.target||e.srcElement：获取事件源对象
   * e.button：1、2、3
   * e.preventDefault || e.returnValue=false;//阻止默认事件
   * e.stopPropgation || e.cancelBubble=false;//阻止默认事件
   * e.offsetX|Y：获取鼠标相对于事件源对象的坐标
   * e.clientX|Y：获取鼠标相对于浏览器的左上角坐标
   * e.pageX|Y：获取相对于页面的左上顶点坐标（当网页有滚动条时候，该属性和clientX|Y就有了区别）
---
### JavaScript中的事件机制
* 事件冒泡：事件从内部向外层逐层发散的过程称之为事件冒泡
* 事件捕获：事件从外层向内层逐层收敛的过程称之为事件捕获
---
### JavaScript中的事件监听器
* addEventListener || attachEvent
    * addEventListener("click",function(){},true);//有三个参数
        * 第一个：事件类型
        * 第二个：事件处理函数
        * 第三个：捕获或非捕获
    * attachEvent("onclick",function(){});
        * 第一个：事件类型
        * 第二个：事件处理函数
* removeEventListener || detachEvent
---
### 事件委托
* 利用事件冒泡机制，实现事件委托
* 委托和代理是相对的概念
---
### 拖拽
* 利用onmousedown、onmousemove、onmouseup事件组合实现拖拽
---
### 自定义右键菜单
* 阻止默认事件，然后自定义菜单
---
### 案例
* 鼠标跟随效果
* 鼠标移动记忆效果
* 浮动菜单
* 放大镜
* 打字游戏


