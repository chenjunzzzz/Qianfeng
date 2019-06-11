/*
函数返回值：
	关键字：return;
	函数可以有返回值，也可以没有返回值
	
	返回值：是返回给调用函数的表达式
	返回值可以是任意表达式或者值或者对象

匿名函数：


函数自调用：

递归
*/

/*
function fn(a){
	console.log(a);
	//return fn;
	//return;
}
console.log(fn(1));
fn();
fn();
*/


/*
	匿名:就是没有名字的函数
		使用方式：
			自我调用
			结合事件，或者变量一起使用
			
		匿名函数传参：
			
	
*/

/* 函数自调用
(function (){
	console.log(101);
})();

(function fn(){
	console.log(100);
})();

*/


/*
常用的事件：
	onclick:点击事件
	onmousedown：表示鼠标按下
	onmouseup：表示鼠标抬起事件
	onmousemove：表示鼠标移动事件
	onmouseover：表示鼠标悬停事件
	onmouseout：表示鼠标移出事件
	
	onkeydown：表示键盘按下事件
	onkeyup：表示键盘抬起事件
	
	onfocus：表单元素获得焦点
	onblur：表单元素失去焦点
	
	onload：事件
*/
/*
window.onload=function(){//当浏览器将HTML文档内容全部加载完成以后自动触发onclick事件。
	alert("ok");
};
*/

/*
*知识点：变量提升、函数提升
	* 提升的区别
var _fn=function(){
	console.log(123);
};

function _fn(){
	console.log(456);
}
_fn();


//提升后的代码
var _fn;
function _fn(){
	console.log(456);
}

_fn=function(){
	console.log(123);
};

_fn();
*/


/*匿名函数传参*/
/*
(function(n){
	console.log(n);
})(10);
(function(n){
	console.log(n);
}(10));
*/

/*匿名函数的返回值
console.log((function (i){
	return 100;
})(10));
*/




/*
	函数调用完毕后自动释放
	
	递归：函数自身调用自身一种算法叫递归
		注意点：
			一定要有出口：利用return关键字去实现
			
*/
/*
function fn(){
	return;
	console.log(3+2);
}
fn();
*/


/*5!*/
/*
function fn1(n){
	if(1<=1){
		return 1;
	}
	return 1*fn1(1-1);
}
function fn2(n){
	if(2<=1){
		return 1;
	}
	return 2*1;
}
function fn3(n){
	if(3<=1){
		return 1;
	}
	return 3*2*1;
}
function fn4(n){
	if(4<=1){
		return 1;
	}
	return 4*3*2*1;
}



function fn(n){
	if(n<=1){
		return 1;
	}
	return n*fn(n-1);
}
console.log(fn(5));
*/


/*
function fn(n){
	if(n>=100){
		return;
	}
	console.log(n);
	fn(n+2);
}
fn(1);
*/



function line(n){
	document.write(n);
	function columns(m){
		if(m>=n){
			return;
		}
		document.write(n);
		columns(++m);
	}
	columns(1);
	document.write("<br/>");
	if(n>=9){
		return;
	}
	line(++n);
}
line(1);





































