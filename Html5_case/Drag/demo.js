



function printV(){
	var _span=null;
	var _panel=document.getElementById("v");
	var n=0;
	for(var h=-2;h<=0;h++){
		for(var v=-2;v<=2;v++){
			if(Math.abs(h)+Math.abs(v)==2){
				n++;
				_span=document.createElement("span");
				_span.innerHTML=n;
				_span.style.left=(h+2)*50+"px";
				_span.style.top=(v+2)*50+"px";
				_panel.appendChild(_span);
			}
		}
	}
}

var fn=function(){
	var _img=document.getElementById("exchange").children[0].children[0];
	_img.src=this.src;
}
function eventHandle(){
	var _list=document.getElementById("exchange").children[1].children;
	for(var i=0;i<_list.length;i++){
		_list[i].onmouseover=fn;
	}
}
var callback=function(data){
	var _data=window.eval("("+data+")");
	var _data=JSON.parse(data);
	var _img=null;
	var _panel=document.getElementById("exchange").children[1];
	for(var i=0;i<_data["images"].length; i++){
		_img=document.createElement("img");
		_img.src=_data["images"][i];
		_panel.appendChild(_img);
		if(i==0){
			_img=document.createElement("img");
			_img.src=_data["images"][i];
			_panel.parentNode.children[0].appendChild(_img);
		}
	}
	eventHandle();
}
function exchange(){
	ajax("post","Library/demo.json",true,null,callback);
}







var _self=null;

var _top=0;
var _st=0;

var endx=0;
var endy=0;
function fx(e){
	this.style.zIndex="99";
	e=e||window.event;
	
	var ox=e.offsetX;
	var oy=e.offsetY;
	
	_self=this;
	_top=_self.parentNode.offsetTop;//父节点相对于body的垂直偏移量；
	st=document.documentElement.scrollTop||document.body.scrollTop;//滚动条向下滚动的高度
	
	endx=e.clientX-ox;
	endy=e.clientY+st-_top-oy;
	
	document.onmousemove=function(e){
		e=e||window.event;
		_self.style.left=(e.clientX-ox)+"px";
		_self.style.top=(e.clientY+st-_top-oy)+"px";
	}
}
function fm(e){
	this.style.zIndex="0";
	e=e||window.event;
	document.onmousemove=null;
	var _x0=_self.offsetLeft;//_self的当前水平left值
	var _y0=_self.offsetTop;//_self的当前垂直top值
	var _x1=0,_y1=0;//保存与之比较的对象的水平位置和垂直位置的值；
	var _list=_self.parentNode.children;//所有节点
	
	var _h=e.clientX-e.offsetX;
	var _v=e.clientY+st-_top-e.offsetY;
	
	var _arr=[0,Math.abs((endx-_h)*(endx-_h)+(endy-_v)*(endy-_v))];
	//alert((endx+","+_h)+","+(endy+","+_v));
	for(var n=0;n<_list.length;n++){
		if(_list[n]===_self){
			_arr[0]=n;
			break;
		}
	}
	for(var i=0;i<_list.length;i++){
		if(_list[i]!==_self){
			_x1=_list[i].offsetLeft;
			_y1=_list[i].offsetTop;
			if(Math.abs((_x1-_x0)*(_x1-_x0)+(_y1-_y0)*(_y1-_y0))<_arr[1]){
				_arr[0]=i;
				_arr[1]=Math.abs((_x1-_x0)*(_x1-_x0)+(_y1-_y0)*(_y1-_y0));
			}
		}
	}
	_self.style.left=_self.parentNode.children[_arr[0]].style.left;
	_self.style.top=_self.parentNode.children[_arr[0]].style.top;
	_self.parentNode.children[_arr[0]].style.left=endx+"px";
	_self.parentNode.children[_arr[0]].style.top=endy+"px";
	
}

function nine(){
	var _div=null;
	var m=0;
	var _panel=document.getElementById("nine");
	for(var i=0;i<9;i++){
		for(var n=0;n<9;n++){
			m++;
			_div=document.createElement("div");
			_div.innerHTML=m;
			_div.style.top=i*80+10*(i+1)+"px";
			_div.style.left=n*80+10*(n+1)+"px";
			_div.style.backgroundColor="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
			//加上mousedown&&mouseup事件目的是实现拖拽
			_div.onmousedown=fx;
			_div.onmouseup=fm;
			//所有工作完成以后添加到容器当中
			_panel.appendChild(_div);
		}
	}
}







window.onload=function(){
	printV();
	exchange();
	
	nine();
	
}
document.onselectstart=function (){ return false;};
console.log(document.cookie);
console.log(document.abc);

















