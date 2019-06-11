//var _cookie=document.cookie;//获取cookie的方式
//？cookie是以什么样的格式存储的？
//字符串类型，键值对形式存储

//document.cookie="account=Ghost1002; path=/HTML5; expires="+(new Date().getTime()+15*24*60*60*1000);//保存cookie
//过期时间expires
//设置cookie的路径：作用：限制用户的访问权限；
//domain：
//想删除cookie：让他过期



//需求分析：
/**
 * 购物车的功能会在哪些页面出现？
 * 首页、列表页上需要出现购物车：购物车的查询功能
 * 产品详情页：查询、添加
 * 查看购物车页面：查询、增加、删除、查看商品、统计数量。
 */
/**
 * 高内聚，低耦合
 */

class Cookie{
    constructor(){
        this.storage="";
        this.summary=0;
    }
    init (){
        if(document.cookie){
            this.storage=document.cookie;//document.cookie非对象
        }else{
            document.cookie="";
        }
        return this;
    }
    insert(_identify,_counter){
        document.cookie=_identify+"="+_counter+"; path=/;expires="+(new Date().getTime()+7*24*60*60*1000);
        this.init();
        return this;
    }
    save(_identify,_counter){
        var _values,_tmp;//先声明后使用
        this.init();
        _values=this.storage.split(/;\s*/g);
        for(let i=1;i<_values.length;i++){
            _tmp=_values[i].split("=");
            if(_tmp[0]===_identify+''){
                document.cookie=_identify+"="+(_counter+parseInt(_tmp[1]))+";path=/;";
                break;
            }
        }
    }
    format(_storage){
        var _values=_storage.split(/;\s*/g);
        var _tmp=[];

        this.summary=0;
        for(let i=1;i<_values.length;i++){
            _tmp=_values[i].split("=");
            this.summary+=parseInt(_tmp[1]);
        }
    }
    query(){
        this.format(this.storage);
        console.log(this.summary);
    }
    delete(){
        //设置过期日期
        this.init();
        document.cookie=this.storage+";path=/;expires="+new Date("1970-01-01");
    }


    /**
     * @param _dom dom 的id
     * @param _identify 产品的ID
     * @param _counter 加入购物车的数量
     */
    add(_dom,_identify,_counter){
        let _self=this;
        document.getElementById(_dom).onclick=function(){
            _self.insert(_identify,_counter);
        }
    }
}

Cookie.prototype=new Parent();












// function fn(){
//     return fn;
// }



//fn()()()===fn()()//函数的链式调用
