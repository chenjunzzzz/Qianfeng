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
