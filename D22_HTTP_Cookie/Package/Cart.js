class Cart{
    constructor(){
        this.storage={};
    }
    take(){
        let _cookie=document.cookie;//获取cookie
        // if(/(?<=Cart1908=){("?\w+"?:\s*"?\d+"?,?)*}/g.test(_cookie)) {//非捕获反向肯定预查询
        //     this.storage=window.eval("("+_cookie.match(/(?<=Cart1908=){("?\w+"?:\s*"?\d+"?,?)*}/g)[0]+")");
        // }
        if(/(Cart1908=){("?\w+"?:\s*"?\d+"?,?)*}/g.test(_cookie)) {
            this.storage=window.eval("("+_cookie.match(/(Cart1908=){("?\w+"?:\s*"?\d+"?,?)*}/g)[0].replace(RegExp.$1,"")+")");
        }
        // console.log(this.storage);
        // let _map=_cookie.split(";"),_item;
        // for(let i=0;i<_map.length;i++){
        //     _item=_map[i].split("=");
        //     if(_item[0]===" Cart1908"){
        //         // console.log(_item[1]);
        //         console.log(window.eval("("+_item[1]+")"));
        //         break;
        //     }
        //     console.log(_item);
        // }
        // console.log(_map);
    }
    save(){
        document.cookie="Cart1908="+JSON.stringify(this.storage)+";path=/;expires="+(new Date(new Date().getTime()+7*24*60*60*1000));
    }
    insert(_identify,_counter){//作用:点击加号按钮,或者点击加入购物车按钮的时候调用这个方法
        if(_counter>0) {
            this.take();
            if (this.storage[_identify]) {
                this.storage[_identify] += _counter;
            } else {
                this.storage[_identify] = _counter;
            }
            this.save();
        }
    }
    subtract(_identify,_counter){//作用:点减号按钮时调用该方法
        this.take();
        if(this.storage[_identify]){
            if(this.storage[_identify]>_counter){
                this.storage[_identify]-=_counter;
            }else{
                delete this.storage[_identify];
            }
            this.save();
        }else{
            alert("购物车中已无此数据");
        }
    }
    remove(_identify){
        this.take();
        if(this.storage[_identify]){
            delete this.storage[_identify];
            this.save();
        }else{
            alert("购物车中已无此商品");
        }
    }
    reset(_identify,_counter){
        this.take();
        if (/^[1-9]\d*$/g.test(_counter + "")) {
            this.storage[_identify] = _counter;
            this.save();
        }
    }
}
class Mine extends Cart{
    constructor(){
        super();
    }
    statistics(){
        let _counter=0;
        this.take();
        for(let _key in this.storage){
            _counter+=this.storage[_key];
        }
        return _counter;
    }
}