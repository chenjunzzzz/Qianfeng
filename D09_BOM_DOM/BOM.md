### BOM:Browser Object Model
* BOM：Browser Object Model 目前没有正式的标准，因浏览器不同而不同。
* window对象介绍
    * window.location
        * window.location该对象控制的是我们所在浏览器的位置
        * window.location.href;这个属性是最重要
        * window.location.search();//?+参数名+参数的值都给显示出来
        * window.location.reload([true]);//reload 方法参数可选，参数类型：boolean
    * window.history
        * back();
        * forward();
        * go();
    * window.navigator
        * userAgent
    * window.onload:为什么要等到浏览器网页加载完成之后才执行js
    * window.onresize:是一个事件，当窗口的尺寸发生改变的时候，就会触发该事件
    * window.onscroll:是一个事件，当窗口滚动条发生改变的时候，就会触发该事件
    * window.setTimeout:延时器，和下面的定时器相似
    * window.setInterval:定时器
        * 进程：一个应用程序对应一个进程
        * 线程：一个进程可以包含若干子线程