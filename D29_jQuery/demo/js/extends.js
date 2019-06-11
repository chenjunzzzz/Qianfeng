function opacity(){
    var _body=document.getElementsByTagName("body")[0];
    var _opacity=0;//作用控制图片透明度
    var _timer=0;//保存定时器变量，以便后期清空，节省空间
    var _index=0;

    function create(){
        var _container=document.createElement("div");

        var _main=document.createElement("div");
        var _img=document.createElement("img");

        var _pic=document.createElement("div");

        _pic.id="pic";

        _main.id="main";
        _img.src="images/_01.jpg";
        _main.appendChild(_img);

        _container.appendChild(_main);
        _container.appendChild(_pic);
        _container.className="opacity";
        _body.appendChild(_container);
    }
    function readeICON(n){
        var _img,_fragment=document.createDocumentFragment();
        for(var i=0;i<n;i++){
            _img=document.createElement("img");
            _img.src="images/_0"+(i+1)+".jpg";
            _fragment.appendChild(_img);
        }
        document.getElementById("pic").appendChild(_fragment);
    }

    function action(){
        window.clearTimeout(_timer);

        _opacity+=0.1;
        document.getElementById("main").children[0].style.opacity=_opacity;

        if(_opacity>=1) {
            _opacity=0;
            _timer = window.setTimeout(function(){
                _index=(parseInt(document.getElementById("main").children[0].src.match(/\d+(?=\.jpg)/g)[0])+1);
                if(_index>5){
                    _index=1;
                }
                document.getElementById("main").children[0].src="images/_0"+_index+".jpg";
                action();
            }, 3000);//切换图片
        }else{
            _timer=window.setTimeout(action,30);//改变opacity
        }
    }

    function events(){
        var _pics=document.getElementById("pic").children;
        for(var i=0;i<_pics.length;i++){
            _pics[i].onmouseover=function(){
                _index=parseInt(this.src.match(/\d+(?=\.jpg)/)[0]);
                _opacity=0;
                document.getElementById("main").children[0].src="images/_0"+_index+".jpg";
                action();
            }
        }
    }

    return function(n){
        _index=n;
        create();
        readeICON(n);
        action();
        events();
    }
}
