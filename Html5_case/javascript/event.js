//this:关键字；
//this：是指向当前对象的指针
//this:判断this指向的时候，不要只看代码，要看什么时候调用；
/*function fn(){
	console.log(this);
}
fn();
window.onload=function(){
	var _demo=document.getElementById("demo");
	_demo.onclick=fn;
}*/

//e=e||window.event;
//e.preventDefault()||e.returnValue=false||return false;
//e.stopPropagation()||e.cancelBubble=true;
//e.keyCode||e.which
//e.button


//e.clientX|Y
//e.offsetX|Y
//e.pageX|Y//有兼容问题

//e.target|currentTarget



//MouseEvent&&KeyborderEvent
//onmousemove|onmouseover|onmouseleave|onmouseout|onmousedown|onmouseup|onclick|ondblclick|onwheel|oncontextmenu
/*document.onselected=function(){
	return false;
}
document.onselectstart=function(){return false;}
*/


//onkeydown|onkeypress\onkeyup


//document.documentElement||document.body
//scrollLeft|scrollTop

//offsetLeft||offsetTop
//offsetWidth||offsetHeight
//clientWidth||clientHeight







window.onload=function(){
	var _demo=document.getElementById("demo");

	//委托
	/*
	function delegate(_obj,_type,_fn){
		_obj[_type]=function(e){
			var _list=_obj.getElementsByTagName("*");
			for(var i=0;i<_list.length;i++){
				if(_list[i]===e.target){
					_list[i].onclick=_fn;
					_list[i].onclick();
					break;
				}
			}
		}
	}
	var _body=document.getElementsByTagName("body")[0];
	delegate(_body,"onclick",function(){
		console.log(this);
	});
	*/
	
	
	
	
	//e.target||e.srcElement
	/**
	* _obj:委托的目标对象
	* _filter:需要发生委托的元素名称，字符串类型
	* _type:委托的事件类型
	* _fn:委托的事件类型
	*/
	function delegate(_obj,_filter,_type,_fn){
		_obj[_type]=function(e){//===_body.onclick=function(e){
			var _tmp=_obj.getElementsByTagName(_filter);
			e=e||window.event;
			for(var n=0;n<_tmp.length;n++){
				if(_tmp[n]===(e.target||e.srcElement)){
					_tmp[n].fx=function(){
						this.fn=_fn;
						this.fn();
					}
					_tmp[n].fx();//手动的强制让onclick执行
					_tmp[n].fx=null;//运行完以后清除掉事件；
					break;
				}
			}
		}
	}
	
	
	var _fn=function(){
		alert(this.className);
	}
	function main(){
		var _body=document.getElementsByTagName("body")[0];//委托的目标对象
		delegate(_body,"div","onclick",_fn);
		_body.addEventListener("click",function(){
			console.log(this);
		},true);
	}
	main();
	
	
	
	/*
	var _btn=document.getElementById("btn");
	_btn.addEventListener("click",function(){
		var _div=document.createElement("div");
		_div.className="demo";
		document.getElementsByTagName("body")[0].appendChild(_div);
	},true);
	*/

	
	
	
	
	
	
	
	
	
	var fn=function(){
		console.log(this);
	}
	
	var _obj=new Object();
	_obj.fn=fn;
	_obj.fn();
	fn();
	
	
	
	
}












