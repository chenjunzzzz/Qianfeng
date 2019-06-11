var _outline=[
    '案例展示',
    '<a href="../mouse_move_case.html" target="_blank">天女散花</a><br/>' +
    '<a href="../float_menu.html" target="_blank">下拉菜单</a><br/>' +
    '<a href="../drag_and_exchange.html" target="_blank">拖拽</a>',



    '事件概念',
    '事件就是即将要发生的一件事，一般与函数配合使用，驱动函数执行某件事。',



    'html属性绑定事件',
    '<pre>' +
    '   &lt;div onclick="click()"&gt;这种方式是要在script标签中声明click函数&lt;/div&gt;<br/>' +
    '   &lt;div onclick="javascript:console.log(this||12345)"&gt;this is second type&lt;/div&gt;' +
    '</pre>',



    'script中绑定事件',
    '<pre>' +
    '   window.onload=function(){<br/>' +
    '       //TODO:<br/>' +
    '   }<br/>' +
    '</pre>',



    '监听方式绑定事件',
    '非IE：addEventListener(type,function,boolean)<br/>' +
    'IE：attachEvent(type,function)、this指针的指向和addEventListener是有区别的<br/>' +
    '可以绑定多事件，但是attachEvent的执行顺序和addEventListener是相反的' +
    'type:表示事件类型<br/>' +
    'function:表示函数，可以是匿名函数，也可以是普通函数<br/>' +
    'boolean:true(表示捕获)||false(表示冒泡)//<b><i>捕获的条件是嵌套，层叠式关系不能形成捕获或者冒泡现象</i></b><br/>' +
    '<b><i>js的事件流也就是指的事件冒泡||捕获</i></b><br/>' +
    '<b><i>几乎所有的DOM对象都拥有：onclick、onmousemove、.....事件</i></b><br/>' +
    'document.createTextNode("文本对象")不具有事件对象',



    '事件冒泡',
    '<img alt="" src="../image/propagation.png"/><br/>"<br/>' +
    '课堂实例',



    '阻止冒泡',
    '非IE中阻止冒泡的方式：e.stopPropagation()<br/>' +
    'IE当中阻止冒泡的方式：e.cancelBubble=true',



    '阻止默认事件',
    '非IE:e.preventDefault();<br/>' +
    'IE:e.returnValue=false;',



    '移除事件',
    'removeEventListener(type,function)和detachEvent(type,function)<br/>' +
    '移除事件使用的场景主要有以下几种：<br/>' +
    '1、网速慢的时候用户重复提交导致多次交易<br/>' +
    '2、事件冒泡触发父元素事件可以先保存，然后移除，操作完以后再恢复',



    '利用冒泡的原理实现事件委托  ||  代理',
    '委托和代理都表示一个动作而已<br/>' +
    '委托和代理的概念不同但实际意义相同。A同学委托B同学卖西瓜，实际上就等同于B同学代理了A同学要做的事<br/>' +
    '如何实现这种关系？',



    'Event对象',
    '1、利用Event对象可以获取当前事件具柄 Event Handle<br/>' +
    '2、可以知道获取坐标信息<br/>' +
    '3、键盘信息',




    '兼容IE',
    'addEventListener attachEvent<br/>' +
    'event 对象兼容<br/>' +
    '阻止冒泡兼容<br/>' +
    '阻止默认事件兼容<br/>' +
    'event.key||event.which<br/>' +
    'event.button',



    '常用事件',
    '1、鼠标事件：onclick,onmousedown、onmouseup、onmousemove、onmouseover<br/>' +
    '2、键盘事件：onkeydown、onkeyup',



    '课堂实例',
    '1、天女散花<br/>' +
    '2、拖拽<br/>' +
    '3、浮动菜单',


    
    '事件实训',
    '1、窗口拖拽<br/>' +
    '--1.1、拖动窗口标题栏然后跟随鼠标移动<br/>' +
    '--1.2、标题栏为蓝色或者淡灰色<br/>' +
    '2、聊天自动回复<br/>' +
    '3、打字游戏<br/>'
];