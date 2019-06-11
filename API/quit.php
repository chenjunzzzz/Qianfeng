<?php
/*
php代码的推荐语法格式:<?php coding ?>，以尖括号问号php开头，问好尖括号结束，coding表示php代码区。
*/
header("content-type:text/html;charset=utf-8");         //设置编码解决中文乱码问题

function main(){//调度的作用
    session_start();//启用服务器端session，session的作用和cookie是相似的只是cookie保存在浏览器端，session是服务器端的数据而已。
    if(isset($_SESSION["account"])){
        unset($_SESSION["account"]);
    }
    echo "{code:1000,comment:'已退出登录'}";
}
main();
?>






