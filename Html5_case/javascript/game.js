/**
 * Created by Evil on 16/9/6.
 */
function KeybordGame(_obj){
    var _collect=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var _width=0;
    var _height=0;
    this.initCss=function(){
        _width=document.documentElement.clientWidth||document.body.clientWidth;
        _height=document.documentElement.clientHeight||document.body.clientHeight;
        _obj.style.width=_width-10+"px";
        _obj.style.height=_height-10+"px";
        return this;
    }
    this.randomChar=function(){
        var _timer=0;
        function createSpan(){
            var _span=document.createElement("span");
            _span.innerHTML=_collect[Math.floor(Math.random()*_collect.length)];
            _span.style.top="-40px";
            _span.style.left=Math.floor(Math.random()*(_width-40))+"px";
            _obj.appendChild(_span);
        }
        function start(){
            window.clearTimeout(_timer);
            createSpan();
            for(var i=0;i<_obj.children.length;i++){
                _obj.children[i].style.top=parseInt(_obj.children[i].style.top.replace("px",""))+50+"px";
            }
            _timer=window.setTimeout(start,500);
        }
        start();
        return this;
    }
    this.validateCode=function(_code){
        for(var i=0;i<_obj.children.length;i++){
            if(_obj.children[i].innerHTML===_code){
                _obj.removeChild(_obj.children[i]);
                break;
            }
        }
    }
}


