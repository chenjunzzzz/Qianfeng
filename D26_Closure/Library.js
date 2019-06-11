class Ajax{
    /**
     * create方法的作用就是返回一个XMLHttpRequest类型的对象
     * 这个对象可以访问服务器的接口
     */
    static create(){
        try{
            return new XMLHttpRequest();//创建并返回一个XMLHttpRequest对象
        }catch (e) {
            try{
                return new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e) {
                if(window.confirm("浏览器版本太低，是否下载最新浏览器！")){
                    window.location.href="https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7BD6579F6B-871A-DF6A-5F90-43784291C5A5%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe";
                }
                return null;
            }
        }
    }

    /** 作用
     * 循环遍历json格式数据，并格式化为另一种数据类型（url encoded parameter）格式
     */
    static format(_send){
        let _parameters="";
        if(_send && typeof(_send)==="object") {
            for (let _key in _send) {
                _parameters += _key + "=" + _send[_key] + "&";
            }
            return _parameters.replace(/&$/g,"");
        }else{
            return _send;
        }
    }

    /**
     * 请求服务器
     * 为什么要封装这个方法？
     *      因为希望代码具有通用性，
     */
    static request(_config){
        let _ajax=this.create();
        if(_ajax){
            _ajax.onreadystatechange=function(){
                if(_ajax.status===200 && _ajax.readyState===4){
                    if(typeof(_config.success)==="function") {
                        _config.success(_ajax.responseText);
                    }
                }
            };
            // _config.method==="GET"
            if(_config.method && _config.method.toUpperCase()==="GET"){//解决get方式和post的两种传参方式
                _config.api+="?"+this.format(_config.send);
                _config.send=null;
            }
            _ajax.open(_config.method?_config.method:"POST",_config.api,_config.async?true:(_config.async===false?false:true));
            _ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
            _ajax.send(this.format(_config.send));
        }
    }
}
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
    statistics(){
        let _counter=0;
        this.take();
        for(let _key in this.storage){
            _counter+=this.storage[_key];
        }
        return _counter;
    }
}
class Queue{
    /**
     * 该类起的作用
     *      1.提供一个排队的容器
     *      2.提供排队的方法
     *      3.执行的方法
     */
    constructor(){
        this.queue=[];
        //作用：将每一步需要执行的异步程序放入此队列中，
        //然后通过一个方法，去依次的调用。
    }
    put(_fx){//作用：将每一步需要执行的异步程序放入此队列中，
        this.queue.push(_fx);
        return this;
    }
    exec(_data){
        if(this.queue.length>0){
            this.queue.shift()(_data);
        }
    }
}