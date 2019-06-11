class Ajax{
    static create(){
        try{
            return new XMLHttpRequest();
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
    static request(_method,_api,_async,_send,_callback){
        let _ajax=this.create();
        if(_ajax){
            _ajax.onreadystatechange=function(){
                if(_ajax.status===200 && _ajax.readyState===4){
                    _callback(_ajax.responseText);
                }
            };
            _ajax.open(_method,_api,_async);
            _ajax.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
            _ajax.send(_send);
        }
    }
}