### 单例模式
>就是只能创建一个实例对象，就叫单例.

>一般的全局对象只要有一处修改需要在其他地方同步更新的时候使用。
 打个比方：单页面应用程序中，一个商品的库存有2个，
 购物车中如果该商品数量原来是1个，然后我又点击+1，那么购物车中该商品的数量就是2个，
 当我返回列表页的时候，库存量需要同步更新的时候就需要使用单例模式
```javascript
var _obj={};//这就是单例，简单的创建方式
function single(){//一般的创建方式
    if(!single.has){
        single.module={};
    }
    return single.Module;
}
function Single(){}
Single.prototype.module={
    title:"ZHANGSAN",
    phone:"18911751141"
};
var _single1=new Single();
var _single2=new Single();
_single1.module.title="LISI";
console.log(_single2.module.title);
```
---
### 组合模式
>组合模式允许你将对象组合成树形结构来表现”部分-整体“的层次结构，使得客户以一致的方式处理单个对象以及对象的组合。
 简单对象和复合对象必须实现相同的接口
* 使用场景
    * 1.需要统一管理对象
    * 2.形成一颗对象树,
    * 3.需要动态声明若干个变量，而且是要多次使用的。
 ```javascript
class Component{
    constructor(_attr){
        this.attr=_attr;
    }
    create(){}
    slider(){}
}
class Leaf extends Component{
    constructor(_attr) {
        super(_attr);
    }
    create(){
        console.log("leaf create");
    }
    slider(){
        console.log("leaf slider");
    }
}
class Composite extends Component{
    constructor(_attr) {
        super(_attr);
        this.children=[];
    }
    create() {
        console.log("composite create");
    }
    slider(){
        console.log("composite slider");
    }
    put(_child){
        this.children.push(_child);
    }
    show(){
        console.log(this);
    }
}
let _root=new Composite("root"),_branch;
_root.put(new Leaf("a leaf"));
_branch=new Composite("a branch");
_root.put(_branch);
_branch.put(new Leaf("a branch leaf name is a"));
console.log(_root.show());
```
---
### 观察者模式
> 在对象之间定义了一对多的依赖，这样一来，当一个对象改变状态，依赖它的对象会收到通知并自动更新。
* 现实应用
>观察者模式，首先得有一个或者一群观察对象，比如说刘德华要开演唱会了
 如果我们一起去看，我们就都是观察者:Observer()，刘德华会向我们一群人广播他的歌曲，刘德华就是广播者Publisher()
 那我们要去看演唱会是不是要去买票？得预定。向谁预定呢？刘德华得向我们提供订票的方法：order()
 订票的功能有了，假如某个同学临时有事去不了了，向退票怎么办？刘德华那边是不是还得提供退票方法：cancel()
 另外我们一群人去买了票以后，他那边是不是得记录一下啊，假如我票丢了，但是我真的花钱买了，是不是可以补票啊，补票的根据是什么？
 全世界那么多人，不能凭脑子记忆吧，那好得找给可以记录的东西，买票的人都保存到list数组吧：list=[];都准备好了，演唱会开始了吧，刘德华是不是要把歌声传递给我们把，现实生活中空气就可以传递声音，编程中不能靠空气传把。
 那就用一个方法传把：broadcast()
 他唱完我们（观察者）得听把，程序中也没有耳朵，在写个方法接受吧：hear()
```javascript
let _publisher={
    readers:[],
    attach: function (_reader) {
        this.readers.push(_reader);
    },
    detach: function (_identify) {
        for (let i = 0; i < this.readers.length; i++) {
            if (this.readers[i].identify === _identify) {
                this.readers.splice(i, 1);
                break;
            }
        }
    },
    broadcast: function (_message) {
        for (let i = 0; i < this.readers.length; i++) {
            this.readers[i].observer("（" + this.readers[i].name + "）已经接收到（" + _message + "）");
        }
    }
};

class Readers{
    constructor(_identify,_name) {
        this.identify=_identify;
        this.name=_name;
    }
    static observer(_message){
        console.log(_message);
    }
}

_publisher.attach(new Readers(1,"张三"));//添加订阅者或者说是观察者
_publisher.attach(new Readers(2,"李四"));//添加订阅者或者说是观察者
_publisher.attach(new Readers(3,"王五"));//添加订阅者或者说是观察者
_publisher.attach(new Readers(4,"赵六"));//添加订阅者或者说是观察者

_publisher.broadcast("broadcast message");//系统向所有观察者广播消息
_publisher.detach(2);//取消订阅，一般由观察者或者叫订阅者自己取消
console.log("=======================================");
_publisher.broadcast("broadcast message");//系统向所有观察者广播消息
```
---
### 工厂模式
> 简单讲就是可以像工厂中流水线上生产产品一样生产对象。
定义了一个创建产品对象的工厂接口，将实际创建工作推迟到子类工厂当中。
```javascript
function factory(){
    var _product={};
    _product.wheel=4;
    _product.seats=4;
    _product.driver=function(){
        console.log("go");
    };
    return _product;
}
var _car01=factory();
var _car02=factory();
```
---
### 抽象工厂（以笔记本为例）
* 1：产品需要分级，如PC机工厂的下一级工厂有CPU，显示器、键盘.......
* 2：下级工厂如CPU可以是intel||amd，性质相同但是又有不同的时候
* 3：需要以一个工厂形式提供使用，也就是说逻辑相当复杂，封装的类以一个简单的形式存在提供使用
```javascript
function cpu(_name,_config,_platform){
    return {
        name:_name,
        config:_config,
        platform:_platform
    };
}
function screen(_name,_size,_type){
    return {
        name:_name,
        size:_size,
        type:_type
    }
}

function PCFactory(){
    return {
        screen:screen("AOC","40寸","液晶"),
        cpu:cpu("intel","16核32线程","sky lake")
    };
}
var _pc=PCFactory();
```
---
### 策略模式
> 同一个方法，根据自己的需求不同可以执行不同的代码。
```javascript
class Subtract{
    calc(a,b){
        console.log(a-b);
    }
}

class Divide{
    calc(a,b){
        console.log(a/b);
    }
}

class Strategy{
    change(_strategy){
        this.strategy=_strategy;
        return this;
    }
    calc(a,b){
        this.strategy.calc(a,b);
    }
}

var _strategy=new Strategy();

_strategy.change(new Divide());
_strategy.calc(9,3);

_strategy.change(new Subtract());
_strategy.calc(9,3);
```
---
### 代理模式
* 代理和委托是并行的，有代理方，就一定要有委托方
```javascript
class Delegator{
    thirsty(){
        return "thirsty";
    }
}
class Agent{
    water(_arg){
        console.log(_arg);
    }
    done(_arg){
        this[_arg](_arg);
    }
}

var _delegate=new Delegator();
var _agent=new Agent(_delegate.thirsty());
```
---
### 适配器模式
> 适配器：打个比方投影仪和电脑本身是两个不同的物理设备。
> 如果希望能让投影仪实现播放电脑的屏幕上的内容，该如何实现？
> 这个时候就需要找一个可以同时链接电脑和投影仪的东西来，这个东西就叫适配器。
* 使用场景
> 适配器模式一般应用在有一定规范的项目中，比如框架中有的代码只能在类A中写，但是发现类C中有完整的实现代码
> 但是C中这个方法需要一个特定类型的参数
> 这种情况下就可以使用适配器模式
```javascript
/**
 * 项目开发过程中，架构师明确给出一系列接口说明文档
 * 要求如下：
 * 类B只有data数据模型，数组类型
 * 类C只有calc计算方法，只接受JSON格式的数据，用于计算B类的数据，但是没有读取方法。
 * 这种需求并不是故意杜撰出来的，合理的分类，目的是便于维护，同时老员工流失的时候便于新员工上手。
 * 只要维护方法就行。那么这种情况下怎么办？
 *
 * 我们处理业务组的同时可以通过创建类A适配我们的需求
 * 类A负责读取类B的数据，经过转换后，然后传递给类C。类A在此过程中就起到适配的作用。
 */

class B{
    constructor(){
        this.data1=[0,1,2,3,4,5,6,7];
    }
}
class C{
    calc(_data){
        let _sum=0;
        for(let _k in _data){
            if(_data.hasOwnProperty(_k)) {
                _sum += _data[_k];
            }
        }
        return _sum;
    }
}
class Adapter{
    adapter(){
        let _b=new B();
        let _data={};
        for(let i=0;i<_b.data1.length;i++){
            _data[i]=_b.data1[i];
        }
        return new C().calc(_data);
    }
}
```