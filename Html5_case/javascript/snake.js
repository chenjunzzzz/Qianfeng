/**
 * Created by my on 2016/5/7.
 */
window.onload=function() {
    var _stage = document.getElementsByTagName("body")[0];//获取body元素节点
    var _head = document.getElementById("head");//蛇头
    var _body = null;//表示食物,被吃以后就是蛇身体的一部分;
    function createBody() {
        _body = document.createElement("div");
        _body.style.left = Math.floor(Math.floor(Math.random() * (document.documentElement.clientWidth || document.body.clientWidth))/10)*10 + "px";
        _body.style.top = Math.floor(Math.floor(Math.random() * (document.documentElement.clientHeight || document.body.clientHeight))/10)*10 + "px";
        _body.className = "body";
        _body.style.backgroundColor = "red";
        _stage.appendChild(_body);
    }
    createBody();//创建食物 1
    var _timer = 0;
    var _distance = 0;//距离
    var _direction = 0;//方向
    function calculatePos(_cmd){
        var _list=_stage.getElementsByTagName("div");
        for (var i = _list.length-2; i >=1; i--) {
            if ((_list[i].currentStyle || window.getComputedStyle(_list[i],null))["backgroundColor"] != "red" && _list[i].id != "head") {
                _list[i].style.left=window.getComputedStyle(_list[i-1],null)["left"];
                _list[i].style.top=window.getComputedStyle(_list[i-1],null)["top"];
            }
        }
    }
    function startMove(_cmd) {//_cmd 就是KEYCODE传过来的值,当前按下的方向键
        if (_cmd == 37 || _cmd == 39) {
            _direction = "left";//_direction:表示方向，水平和垂直，不区分上下左右，只表示水平和垂直两个方向。
        } else {//隐式数据类型转换，显式数据类型转换，强制数据类型转换
            _direction = "top";
        }
        /*if (_cmd == 37 || _cmd == 39) {
            _distance = parseInt((window.getComputedStyle(_head, null)["left"] || _head.currentStyle["left"]).match(/\d+/)[0]);
        } else {//隐式数据类型转换，显式数据类型转换，强制数据类型转换
            _distance = parseInt((window.getComputedStyle(_head, null)["top"] || _head.currentStyle["top"]).match(/\d+/)[0]);
        }*/
        _distance = parseInt((window.getComputedStyle(_head, null)[_direction] || _head.currentStyle[_direction]).match(/\d+/)[0]);
        function move() {
            if (_cmd == 39 || _cmd==40) {
                _distance+=10;
            }else {
                _distance-=10;
            }

            /*if(_cmd==37 || _cmd==39){
                _head.style["left"] = _distance + "px";
            }else{
                _head.style["top"] = _distance + "px";
            }*/
            _head.style[_direction] = _distance + "px";

            if (_body.style.left == _head.style.left && _body.style.top == _head.style.top) {//此条件表示吃到食物
                _body.style.backgroundColor = "darkred";//这两句话的顺序不能颠倒
                createBody();//再次随机出一个食物
            }
            calculatePos(_cmd);//3计算身体和头部的未知,也就是重新布局
            _timer = window.setTimeout(move, 100);
        }
        move();
    }
    var _current=39;
    document.onkeydown = function (e) {//2
        //键盘的键码值   37:向左 38:向上 39:向右 40:向下
        //alert(e.keyCode);
        window.clearTimeout(_timer);//当按下任意键的时候都停下来
        if (e.keyCode >= 37 && e.keyCode <= 40) {//如果满足37-40
            if((_current==39 && e.keyCode!=37)|| (e.keyCode!=39 && _current==37)|| (e.keyCode!=38 && _current==40)|| (e.keyCode!=40 && _current==38)) {
                _current= e.keyCode;//记忆当前触发的键盘值。以备下一次比较
                startMove(e.keyCode);
            }
        }
    }
}