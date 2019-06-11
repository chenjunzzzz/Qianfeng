//公共方法
function encodeData(_value){
    if(/"/g.test(_value)){
        _value=_value.replace(/"/g,"\\\"");
    }
    if(/'/g.test(_value)){
        _value=_value.replace(/'/g,"\\\\\\\'");
    }
    if(/\/{2,}/g.test(_value)){
        _value=_value.replace(/\//g,"\\/");
    }
    if(/\n+/g.test(_value)) {
        _value = _value.replace(/\n/g, "<br>");
    }
    return window.encodeURIComponent(_value);
}
function convert(data){
    return window.eval("("+data+")");
}
function dom(_identify){
    return document.getElementById(_identify);
}
function tag(_tag){
    return document.getElementsByTagName(_tag);
}

/**
 * 提示框
 * @param _target
 * @param _msg
 * @constructor
 */
function TipDialog(_target, _msg){
    var _width,_height,_div;
    this.init=function(_config){
        _div=document.createElement("div");
        _div.style.position="fixed";
        _div.style.top=_config.top?_config.top:"4rem";
        _div.style.left=_config.left?_config.left:"50%";
        _div.style.width=_config.width?_config.width:"6rem";
        _div.style.height=_config.height?_config.height:"1rem";
        _div.style.background=_config.background?_config.background:"#fff";
        _div.style.fontSize=_config.fontSize?_config.fontSize:"0.4rem";
        _div.style.textAlign=_config.align?_config.align:"center";
        _div.style.borderRadius=_config["radius"]?_config["radius"]:"0";
        _div.style.border=_config.border?_config.border:"solid 0.05rem rgba(207,0,6,0.8)";
        _div.style.color=_config.color?_config.color:"#555";
        _div.style.margin=_config.margin?_config.margin:"0 auto 0 -3rem";
        _div.style.zIndex="999";
        _div.innerHTML=_msg;
        _target.appendChild(_div);
        _width=_div.clientWidth;
        _height=_div.clientHeight;
        _div.style.lineHeight=_height+"px";
        _div.style.margin="0 auto auto -"+_width/2+"px";
        return this;
    };
    this.complete=function(_tip,fx,_s){
        var _timer=0;
        _div.innerHTML=_tip;
        _timer=window.setTimeout(function(){
            window.clearTimeout(_timer);
            _target.removeChild(_div);
            if(fx){
                fx();
            }
        },_s?_s:2000);
    };
}

/**
 * 对话框
 * @param _config
 */
function dialog(_config){
    var _container,_div,_input,_span;

    _container=document.createElement("div");
    _container.style.width="10rem";
    _container.style.backgroundColor="#fff";
    _container.style.position="fixed";
    _container.style.top="4rem";
    _container.style.left="1rem";
    _container.style.height="4.8rem";
    _container.style.border="solid 0.05rem #ddd";
    _container.style.zIndex="999";

    _div=document.createElement("div");
    _div.style.display="block";
    _div.style.width="100%";
    _div.style.textAlign="center";
    _div.style.height="1.2rem";
    _div.style.lineHeight="1.2rem";
    _div.style.fontSize="0.4rem";
    _div.style.color="#fff";
    _div.style.float="left";
    _div.style.backgroundColor="rgba(207,0,6,0.8)";
    _div.innerHTML=_config.tip?_config.tip:"点击此处关闭对话框";
    _div.onclick=function(){
        tag("body")[0].removeChild(_container);
    };
    _container.appendChild(_div);

    _div=document.createElement("div");
    _div.style.width="100%";
    _div.style.float="left";
    _div.style.height="1.5rem";
    _div.style.paddingTop="0.3rem";
    _input=document.createElement("input");
    _input.type=_config.type?_config.type:"text";
    if(!_config.edit){
        _input.readOnly="readOnly";
    }
    _input.value=_config.default?_config.default:"";
    _input.style.textAlign="center";
    _input.style.padding="0 0.1rem";
    _input.style.width="9rem";
    _input.style.border="solid 1px #ccc";
    _input.style.margin="0.2 0.37rem 0 0.37rem";
    _input.style.outline="none";
    _input.style.height="1rem";
    _input.style.lineHeight="1rem";
    _div.appendChild(_input);

    _container.appendChild(_div);

    _div=document.createElement("div");
    _div.style.width="100%";
    _div.style.float="left";
    _div.style.height="1.5rem";
    _span=document.createElement("span");
    _span.className="red_btn";
    _span.innerText=_config.left?_config.left:"取消";
    _span.onclick=function(){
        if(_config.l_press) {
            _config.l_press(_input.value);
        }
        tag("body")[0].removeChild(_container);
    };
    _div.appendChild(_span);

    _span=document.createElement("span");
    _span.className="red_btn";
    _span.style.margin="0 auto auto 0.1rem";
    _span.innerText=_config.right?_config.right:"确认";
    _span.onclick=function(){
        if(_config.r_press){
            _config.r_press(_input.value);
        }
        tag("body")[0].removeChild(_container);
    };
    _div.appendChild(_span);
    _container.appendChild(_div);

    tag("body")[0].appendChild(_container);
}

/**
 * Ajax Object
 * @constructor
 */
function AjaxRequest(){
    function seriesData(data){
        var _sender="";
        if(data instanceof Object){
            for(var k in data){
                if(data.hasOwnProperty(k)) {
                    _sender += k + "=" + data[k] + "&";
                }
            }
            return _sender.replace(/&$/g,"");
        }else{
            return data;
        }
    }
    /**
     * 创建XMLHttpRequest
     */
    function createXMLHttpRequest(){
        try{
            return new window.XMLHttpRequest();
        }catch(e){
            try{
                return new ActiveXObject("MSXML2.XMLHTTP.6.0");
            }catch(e){
                try{
                    return new ActiveXObject("MSXML2.XMLHTTP.3.0");
                }catch(e){
                    try{
                        return new ActiveXObject("MSXML2.XMLHTTP");
                    }catch(e){
                        try{
                            return new ActiveXObject("Microsoft.XMLHTTP");
                        }catch(e){
                            throw new Error("该浏览器版本太低,已经被大部分市场淘汰,请升级!!!");
                        }
                    }
                }
            }
        }
    }
    this.request=function(_config){
        var _ajax = createXMLHttpRequest();
        if (_ajax) {
            _ajax.onreadystatechange = function () {
                if (_ajax.readyState === 4 && _ajax.status === 200) {
                    _config.success(_ajax.responseText);
                }
            };

            _ajax.open(_config.method ? _config.method : "post", _config.url, _config.async ? _config.async : true);
            _ajax.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=utf-8");
            _ajax.send(seriesData(_config.data));
        }
    }
}






/**
 * Show image view when Upload Image
 */
function image(){
    var _container=dom("image");
    var _reader = new FileReader();
    var _file=document.createElement("input");
    _file.type="file";
    _file.onchange=function(){
        _reader.readAsDataURL(_file.files[0]);
    };
    _container.children[0].onclick=function(){
        var _image=this,_photo=document.createElement("img");
        _photo.onload=function(){
            var _canvas=document.createElement("canvas"),_context;
            var _width=this.offsetWidth,_height=this.offsetHeight;
            _canvas.width=500*1.5;
            _canvas.height=500*1.5;
            _context=_canvas.getContext("2d");
            if(Number(_width/_height).toFixed(2)>Number(_canvas.width/_canvas.height).toFixed(2)){
                _context.drawImage(this,(_width-_height)/2,0,_height,_height,0,0,_canvas.width,_canvas.height);
            }else{
                _context.drawImage(this,0,(_height-_width)/2,_width,_width,0,0,_canvas.width,_canvas.height);
            }
            _image.src=_canvas.toDataURL("Image/jpg");
            _container.removeChild(_photo);
        };
        _reader.onload = function () {
            _photo.src=_reader.result;
            _container.appendChild(_photo);
        };
        _file.click();
    };
}


/**
 * 左右滚动的动画效果
 * @param _container 动画容器
 * @param _dots 动画小圆点
 */
function Slider(_container,_dots){

    var _self=this;
    var _left=0,_pos=0,_start=0,_over=0,_width=document.documentElement.clientWidth||document.body.clientWidth;
    var _rgba="rgba(187,187,187,0.8)";
    var _step=Math.floor(_width*0.25);

    this.timer=0;

    function left(){
        _left-=_step;
        _container.style.left=_left+"px";
        if(Math.abs(_container.offsetLeft%_width)<_step){
            _step=Math.floor(_width*0.25);
            _left=_container.offsetLeft-(_container.offsetLeft%_width);
            _container.style.left=_left+"px";
            for(var i=0;i<_dots.children.length;i++){
                _dots.children[i].style.backgroundColor=_rgba;
            }
            _pos=Math.abs(_container.offsetLeft/_width);
            _dots.children[_pos>=_container.children.length-1?0:_pos].style.backgroundColor="rgba(246,89,12,0.8)";
            _self.timer=window.setTimeout(slider,3000);
        }else{
            _step*=0.8;
            _container.style.left=_left+"px";
            _self.timer=window.setTimeout(slider,30);
        }
    }
    function right(){
        _left+=_step;
        _container.style.left=_left+"px";
        if(Math.abs(_container.offsetLeft%_width)>_step){
            _step*=0.8;
            _container.style.left=_left+"px";
            _self.timer=window.setTimeout(slider,30);
        }else{
            _step=Math.floor(_width*0.25);
            _left=_container.offsetLeft-(_container.offsetLeft%_width);
            _container.style.left=_left+"px";
            for(var i=0;i<_dots.children.length;i++){
                _dots.children[i].style.backgroundColor=_rgba;
            }
            _pos=Math.abs(_container.offsetLeft/_width);
            _dots.children[_pos>=_container.children.length-1?0:_pos].style.backgroundColor="rgba(246,89,12,0.8)";
            _self.timer=window.setTimeout(slider,3000);
        }
    }
    function slider(){
        window.clearTimeout(_self.timer);
        if(dom(_container.id)) {
            if (_start >= _over) {
                if (Math.abs(_left) === _container.clientWidth - _width) {
                    _left = 0;
                }
                left();
            } else {
                if (_left === 0) {
                    _left = -_container.clientWidth + _width;
                }
                right();
            }
        }
    }
    function touchEvent(){
        _container.addEventListener("touchstart",function(e){
            window.clearTimeout(_self.timer);
            _left=_container.offsetLeft;
            _start=e.touches[0].clientX;
        },false);
        _container.addEventListener("touchmove",function(e){
            _over=e.touches[0].clientX;
            if(_left+(_over-_start)>0){
                _left=-(_container.clientWidth-_width);
            }
            if(_left+(_over-_start)<=-(_container.clientWidth-_width)){
                _left=0;
            }
            _container.style.left=_left+(_over-_start)+"px";
            _step=Math.floor(_width*0.25);
        },false);
        _container.addEventListener("touchend",function(e){
            _over=e.changedTouches[0].clientX;
            _left=_left+(_over-_start);
            slider();
        },false);
    }
    function completed(){
        window.clearTimeout(_self.timer);
        var _complete=true;
        for(var m=0;m<_container.children.length;m++){
            if(!_container.children[m].children[0].complete){
                _complete=false;
            }
        }
        if(_complete){
            _width=_container.parentNode.offsetWidth;
            _container.style.width=_container.parentNode.offsetWidth*_container.children.length+"px";
            _self.timer=window.setTimeout(slider,2000);
            touchEvent();
        }else{
            _self.timer=window.setTimeout(completed,60);
        }
    }
    function initCSS(){
        if(_dots.children.length>0) {
            _dots.children[0].style.backgroundColor = "rgba(246,89,12,0.8)";
            _dots.style.width = _dots.children.length * _size * 0.7 + 0.3 * _size + "px";
            _dots.style.left = (_width - _dots.offsetWidth) / 2 + "px";
        }
    }
    this.exec=function (){
        if(_container.children.length>0) {
            initCSS();
            completed();
        }
    };
}

/**
 * 瀑布流
 * @param _config
 * @constructor
 */
function Waterfall(_config){
    var _timer=0;
    var _self=this;

    this.ch=[];//height of columns
    this.container=_config.container;
    this.start=_config.start;
    this.size=_config.size;
    this.load=_config.load;
    this.images=null;


    function scroll(){
        window.onscroll=function (){
            if(dom(_self.container.id)) {
                var _st = document.documentElement.scrollTop || document.body.scrollTop;
                var _oh = document.documentElement.offsetHeight || document.body.offsetHeight;
                var _height = _self.container.offsetHeight;
                if (_st + _oh >= _height) {
                    window.onscroll = null;
                    _self.start += _self.size;
                    _self.load(_self);
                }
            }else{
                window.onscroll=null;
            }
        };
    }
    function max(){
        var _max=_self.ch[0];
        for(var i=1; i<_self.ch.length; i++){
            if(_max<_self.ch[i]){
                _max=_self.ch[i];
            }
        }
        dom("main").style.height=_max+"px";
        _self.container.style.height=_max+"px";
        if(_self.load) {
            scroll();
        }
    }
    function reset(){
        var _col=Math.floor(_self.container.clientWidth/_self.container.children[0].clientWidth);
        var _space=(_self.container.offsetWidth-_self.container.children[0].clientWidth*_col)/(_col-1);
        for(var i=_self.start; i<_self.container.children.length; i++){
            _self.container.children[i].style.position="absolute";
            _self.container.children[i].style.top=((_self.ch[i%_col]?_self.ch[i%_col]:0))+"px";
            _self.container.children[i].style.left=(i%_col)*_space+(i%_col)*_self.container.children[i].offsetWidth+"px";
            _self.ch[i%_col]=(_self.ch[i%_col]?_self.ch[i%_col]:0)+_self.container.children[i].offsetHeight+_space;
        }
        max();
    }
    function state(){
        var _complete=1;
        window.clearTimeout(_timer);
        for(var i=_self.start; i<_self.images.length; i++){
            if(!_self.images[i].complete){
                _complete=0;
                break;
            }
        }
        if(!_complete) {
            _timer = window.setTimeout(state, 1000);
        }else{
            reset();
        }
    }
    this.initialize=function(_fx,_data) {
        _fx(this.container,_data);
        _self.images=this.container.getElementsByTagName("img");
        state();
    };
}

function Synchronize(){
    /**
     * 异步代码同步执行类似Promise
     * */
    var _list=[];
    this.put=function(_fn){
        _list.push(_fn);
        return this;
    };
    this.invoking=function(data){
        if(_list.length>0){
            _list.shift()(data);
        }
    }
}

function ShopCart(){
    var _storage;
    this.init=function(){//initialize storage
        _storage=window.localStorage;
        if (_storage) {
            try {
                if(_storage.hasOwnProperty("JIUDONG")) {
                    _storage = convert(_storage["JIUDONG"]);
                }else{
                    _storage = {};
                }
            }catch (e) {
                _storage=null;
            }
        }
        return _storage;
    };
    this.counter=function(){//calculate cookies number
        var _counter=0;
        if(window.localStorage){
            this.init();
            for (var k in _storage) {
                if (_storage.hasOwnProperty(k)) {
                    _counter += parseInt(_storage[k]);
                }
            }
        }
        return _counter;
    };
    this.formatDate=function(){//set cookie expires
        var _date=new Date();
        return new Date(_date.getFullYear()+"-"+(_date.getMonth()+1)+"-"+(_date.getDate()+7)+" "+_date.getHours()+":"+_date.getMinutes()+":"+_date.getSeconds());
    };
    this.put=function(_identify){//add to cart
        var _format="";
        if(window.localStorage){
            this.init();
            if (_storage.hasOwnProperty(_identify)) {
                _storage[_identify]++;
            } else {
                _storage[_identify] = 1;
            }
            for (var k in _storage) {
                if (_storage.hasOwnProperty(k)) {
                    _format += k + ":" + _storage[k] + ",";
                }
            }
            if (/,$/g.test(_format)) {
                window.localStorage.setItem("JIUDONG","{" + _format.replace(/,$/g, '') + "}");
            }
        }
    };
    this.out=function(_identify){//reduce product from cart
        var _format="";
        if(window.localStorage){
            this.init();
            if (_storage.hasOwnProperty(_identify)) {
                if(parseInt(_storage[_identify])>1) {
                    _storage[_identify]--;
                }else{
                    this.delete(_identify);
                }
            }
            for (var k in _storage) {
                if (_storage.hasOwnProperty(k)) {
                    _format += k + ":" + _storage[k] + ",";
                }
            }
            if (/,$/g.test(_format)) {
                window.localStorage.setItem("JIUDONG","{" + _format.replace(/,$/g, '') + "}");
            }

        }
    };
    this.identifies=function(){//get identifies from cart
        var _identifies="";
        if(window.localStorage){
            this.init();
            for(var k in _storage){
                if(_storage.hasOwnProperty(k)){
                    _identifies+=k+",";
                }
            }
            if(""!==_identifies){
                return _identifies.replace(/,$/g,"");
            }
        }
        return '';
    };
    this.amount=function(_identify){
        if(window.localStorage){
            this.init();
            for(var k in _storage){
                if(_storage.hasOwnProperty(k) && k===_identify){
                    return _storage[k];
                }
            }
        }
    };
    this.delete=function(_identify){
        var _format="";
        if(window.localStorage){
            this.init();
            if (_storage.hasOwnProperty(_identify)) {
                delete _storage[_identify];
            }
            for (var k in _storage) {
                if (_storage.hasOwnProperty(k)) {
                    _format += k + ":" + _storage[k] + ",";
                }
            }
            if (/,$/g.test(_format)) {
                window.localStorage.setItem("JIUDONG","{" + _format.replace(/,$/g, '') + "}");
            }
        }
    };
    this.reset=function(_identify,_counter){
        var _format="";
        if(window.localStorage){
            this.init();
            _storage[_identify]=_counter;
            for (var k in _storage) {
                if (_storage.hasOwnProperty(k)) {
                    _format += k + ":'" + _storage[k] + "',";
                }
            }
            if (/,$/g.test(_format)) {
                window.localStorage.setItem("JIUDONG","{" + _format.replace(/,$/g, '') + "}");
            }

        }
    }
}

function recover(){
    if(document.documentElement && document.documentElement.scrollTop>0) {
        document.documentElement.scrollTop = 0;
    }
    if(document.body && document.body.scrollTop>0){
        document.body.scrollTop=0;
    }
}



var _index=0;
function create(_cursor){
    var _dom=document.documentElement||document.body;
    var _div=document.createElement("div");
    if(_index%2!==0) {
        _div.className="title";
    }else {
        _div.className = "description";
    }
    _div.style.width=_dom.offsetWidth-20+"px";
    if(/\\n|、n/g.test(_outline[_cursor])){
        _div.innerHTML=_outline[_cursor].replace(/\\n/g,"<br/>");
    }else{
        _div.innerHTML=_outline[_cursor];
    }
    document.getElementById("main").appendChild(_div);
}

function scroll(){
    var _main=document.getElementById("main");
    var _body=document.getElementsByTagName("body")[0];

    if(_main.offsetHeight>_body.offsetHeight){
        _body.scrollTop=_main.offsetHeight-_body.offsetHeight;
    }
}

function main(){
    var _main=document.getElementById("main");
    var _body=document.getElementsByTagName("body")[0];
    document.onkeydown=function(e){
        e=e||window.event;
        if(e.key.toLowerCase()==="arrowright"){
            if(_index<_outline.length) {
                create(_index++);
                scroll();
            }
        }
        if(e.key.toLowerCase()==="arrowleft"){
            if(_main.children.length>0){
                _main.removeChild(_main.children[_main.children.length-1]);
                _index--;
                scroll();
            }
        }
        if(e.key.toLocaleLowerCase()==="arrowup"){
            _body.scrollTop=_body.scrollTop-5;
        }
        if(e.key.toLocaleLowerCase()==="arrowdown"){
            _body.scrollTop=_body.scrollTop+5;
        }
    };
}
window.onload=main;
