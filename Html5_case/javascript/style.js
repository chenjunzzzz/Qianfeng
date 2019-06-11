/**
 * Created by Evil on 16/8/10.
 */
function Style(_demo){
    this.initBlind=function(_counter,_src){
        var _height=27;
        var _div=null;
        for(var i=0;i<_counter;i++){
            _div=document.createElement("div");
            _div.style.backgroundImage="url("+_src+")";
            _div.style.backgroundPosition="0px "+-_height*i+"px";
            _div.style.top=_height*i+3+"px";
            _demo.appendChild(_div);
        }
    }
    this.blind=function(_counter,_src){
        this.initBlind(_counter,_src);
        var _timer=0;
        var _list=_demo.getElementsByTagName("div");
        var _h=0;
        (function exec(){
            window.clearTimeout(_timer);
            _h+=3;
            for(var n=0;n<_list.length;n++){
                _list[n].style.height=_h+"px";
            }
            if(_h<27) {
                _timer = window.setTimeout(exec, 100);
            }
        })();
    }
}

function Floor(_demo){
    this.initFloor=function(_counter,_src){
        var _number=20;
        var _div=null;
        for(var i=0;i<_number;i++){
            _div=document.createElement("div");
            _div.style.backgroundImage="url("+_src+")";
            _div.style.backgroundPosition=-i*40+"px 0px";
            _div.style.left=i*40+3+"px";
            _div.style.top=-405-i*45+"px";
            _demo.appendChild(_div);
        }
        _demo.className="floor";
    }
    this.floor=function(_counter,_src){
        this.initFloor(_counter,_src)
        var _timer=0;
        var _list=_demo.getElementsByTagName("div");
        (function exec(){
            window.clearTimeout(_timer);
            var _top=0;
            var _flag=0;
            for(var i=0;i<_list.length;i++){
                _flag=0;
                _top=parseInt((_list[i].currentStyle || window.getComputedStyle(_list[i],null))["top"].replace(/px/g,""));
                if(_top<0){
                    _flag=1;
                    _list[i].style.top=_top+9+"px";
                }else{
                    _list[i].style.top=3+"px";
                }
            }
            if(_flag==1){
                _timer = window.setTimeout(exec, 30);
            }
        })();
    }
}

function Exchange(_demo){
    this.initExchange=function(_counter,_src){
        var _div=null;
        for(var i=0;i<_counter;i++){
            _div=document.createElement("div");
            _div.style.backgroundImage="url("+_src+")";
            _div.style.backgroundPosition=-i*40+"px 0px";
            _div.style.left=i*40+3+"px";
            _div.style.top=(i%2==0?-405:405+6)+"px";
            _demo.appendChild(_div);
        }
        _demo.className="exchange";
    }
    this.exchange=function(_counter,_src){
        this.initExchange(_counter,_src)
        var _timer=0;
        var _down=-405,_up=411;
        var _list=_demo.getElementsByTagName("div");
        (function exec(){
            window.clearTimeout(_timer);
            _down=_down+9;
            _up=_up-9;
            _up=_up<3?3:_up;
            _down=_down>3?3:_down;
            for(var i=0;i<_list.length;i++){
                if(i%2==0){
                    _list[i].style.top=_down+"px";
                }else{
                    _list[i].style.top=_up+"px";
                }
            }
            if(_down!=_up) {
                _timer = window.setTimeout(exec, 30);
            }
        })();
    }
}


