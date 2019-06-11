/*
	函数：函数是可以重复调用的代码块
		：表示一个功能或者一个行为
		
		
	函数定义：
		function fn(){}
	
	函数传参：
		arguments:每个函数自带的一个伪数组，类似于数组的东西
			通过arguments对象访问参数的方式
				第0个参数：arguments[0];0表示下标索引
			使用场景：参数数量不确定的时候建议使用
				
		形参：定义函数时声明的参数
			形参一定是个变量
			
		实参：调用函数时传递的参数
			可以是任意表达式或者值或者对象
			
			实参数量：理论上允许任意多个
			
		什么时候需要传参：？
			
	
	函数返回值：
		函数可以有返回值，也可以没有返回值
		
		返回值：是返回给调用函数的表达式
		返回值可以是任意表达式或者值或者对象
	
	匿名函数：
	
	函数自调用：
	
	递归
*/

/*
function fn(_start,_over){//形参
	console.log(arguments[0],arguments);
	for(var i=_start;i<_over;i++){
		document.write(i);
	}
	document.write("<br/>");
}
fn(!0,100);//实参
fn(0+8,50);//实参
fn(50,60);//实参


function fn1(_s,_o){
	for(var i=0;i<100;i++){
		console.log(i);
	}
}
fn1(1,10,8,7,8,89);
fn1(0,50);
*/



/*
传递三个参数，
	如果第一个数大，那就求和
	如果第二个数大，那就求积
	如果第三个数大，那就求差
	
	调用三次该函数，然后计算出三次结果的商
*/
/*
function fn(a=8,b=7,c=9){
	var _max=a;//假设a最大
	var _index=0;
	for(var i=1;i<arguments.length;i++){//document.write();
		if(_max<arguments[i]){
			_max=arguments[i];
			_index=i;
		}
	}
	switch(_index){
		case 0:
			return a+b+c;
			break;
		case 1:
			return a*b*c;
			break;
		case 2:
			return a-b-c;
			break;
	}
}

function main(){
	var _first=fn(8,7,9);
	var _second=fn(8,9,7);
	var _third=fn(9,8,7);
	console.log(_first/_second/_third);
}
main();
*/



/*
	函数返回值：返回一个函数
*/
function fn(a){
	document.write(a);
	return fn;
}

var _fx=fn;   //3+2===5
_fx===fn;

fn(1)===fn;
fn(1)(2)()()===fn(1)()()===fn()()===fn();




fn(1)(2)(3)(4)(5);







