/**
 * Created by my on 2016/5/7.
 */
window.onload=function() {
    var _stage = document.getElementsByTagName("body")[0];
    var _head = document.getElementById("head");
    var _body = null;
    function createBody() {
        _body = document.createElement("div");
        _body.style.left = Math.floor(Math.floor(Math.random() * (document.documentElement.clientWidth || document.body.clientWidth))/10)*10 + "px";
        _body.style.top = Math.floor(Math.floor(Math.random() * (document.documentElement.clientHeight || document.body.clientHeight))/10)*10 + "px";
        _body.className = "body";
        _body.style.backgroundColor = "red";
        _stage.appendChild(_body);
    }
    createBody();
    var _timer = 0;
    var _distance = 0;
    var _direction = 0;
    function calculatePos(_cmd){
        for (var i = _stage.getElementsByTagName("div").length-2; i >=1; i--) {
            if ((window.getComputedStyle(_stage.getElementsByTagName("div")[i],null)["backgroundColor"] || _stage.getElementsByTagName("div")[i].currentStyle["backgroundColor"]) != "red" && _stage.getElementsByTagName("div")[i].id != "head") {
                _stage.getElementsByTagName("div")[i].style.left=window.getComputedStyle(_stage.getElementsByTagName("div")[i-1],null)["left"]||_stage.getElementsByTagName("div")[i-1].currentStyle["left"];
                _stage.getElementsByTagName("div")[i].style.top=window.getComputedStyle(_stage.getElementsByTagName("div")[i-1],null)["top"]||_stage.getElementsByTagName("div")[i-1].currentStyle["top"];
            }
        }
    }
    function startMove(_cmd) {
        if (_cmd == 37 || _cmd == 39) {
            _direction = "left";
        } else {
            _direction = "top";
        }
        _distance = parseInt((window.getComputedStyle(_head, null)[_direction] || _head.currentStyle[_direction]).match(/\d+/)[0]);
        function move() {
            if (_cmd == 39 || _cmd == 40) {
                _distance+=10;
            } else {
                _distance-=10;
            }
            _head.style[_direction] = _distance + "px";
            if (_body.style.left == _head.style.left && _body.style.top == _head.style.top) {
                _body.style.backgroundColor = "darkred";
                createBody();
            }
            calculatePos(_cmd);
            _timer = window.setTimeout(move, 100);
        }
        move();
    }
    var _current=39;
    document.onkeydown = function (e) {
        window.clearTimeout(_timer);
        if (e.keyCode >= 37 && e.keyCode <= 40) {
            if((e.keyCode!=37 && _current==39)|| (e.keyCode!=39 && _current==37)|| (e.keyCode!=38 && _current==40)|| (e.keyCode!=40 && _current==38)) {
                _current= e.keyCode;
                startMove(e.keyCode);
            }
        }
    }
}