class Cart{
    constructor(){
        this.abc=function(){
            return "abc";
        };
        this.xyz=function(){

        };
    }
    take(){
        let _regex=/Cart1908={("?\w+"?\s*:\s*\d+\s*,?)*}/g;
        let _storage=document.cookie;
        //HTML5_1908=59; F=31; Cart1908={"product001": 20,"product002":5}; H51905REVIEW=night19; user=zhangsan; pwd=123456
        if(_regex.test(_storage)){
            _regex.lastIndex=-1;//将正则表达式的最终索引值重置，可以再此从字符串的开头位置进行匹配
            this.storage=window.eval("("+_storage.match(_regex)[0].replace(/Cart1908=/g,"")+")");
        }else{
            this.storage={};
        }
        return 10;
    }
    save(){
        document.cookie="Cart1908="+JSON.stringify(this.storage)+";path=/;expires="+new Date(new Date().getTime()+7*24*60*60*1000);
    }
    insert(_identify,_counter){
        //TODO: to cookie
        if(_counter>0) {
            this.take();
            if(this.storage[_identify]){//如果原来的购物车中已经存在该产品，直接累加
                this.storage[_identify]+=_counter;
            }else{
                this.storage[_identify]=_counter;
            }
            this.save();
            console.log(this.storage);
        }
    }
    reduce(_identify,_counter){
        this.take();//为什么要频繁的调用take方法？
        if(this.storage[_identify]){//判断是否有该商品，如果没有可客户一个友善的提示
            if(this.storage[_identify]>_counter) {//被删除的商品数量不能大于等于购物车中已经存在的商品数量，否则会出现负数
                this.storage[_identify] -= _counter;
            }else{//购物车商品数量小于等于0，直接从购物车中移除该商品
                delete this.storage[_identify];
            }
            this.save();
        }else{
            alert("该产品不存在购物车中");
        }
    }
    remove(_identify){
        this.take();
        if(this.storage[_identify]){
            delete this.storage[_identify];
            this.save();
        }else{
            alert("购物车中已无此商品信息");
        }
    }
    reset(_identify,_counter){
        if(/^[1-9]\d*$/g.test(_counter+'')) {
            this.take();
            this.storage[_identify] = _counter;
            this.save();
            return true;
        }
        return false;
    }
    statistics(){
        let _sum=0;
        this.take();
        for(let _key in this.storage){
            if(this.storage.hasOwnProperty(_key)) {
                _sum += this.storage[_key];
            }
        }
        return _sum;
    }
}