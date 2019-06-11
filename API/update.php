<?php
/*php代码的推荐语法格式:<?php coding ?>，以尖括号问号php开头，问好尖括号结束，coding表示php代码区。*/
header("content-type:text/html;charset=utf-8");         //设置编码
header('Access-Control-Allow-Origin:*');
function main(){
    $connection=new mysqli("127.0.0.1","root","root","db_user");
    if($connection->error){
        die("connection error!");
    }else{
        $request=$_POST;
        if($_SERVER["REQUEST_METHOD"]=="GET"){
            $request=$_GET;
        }
        $connection->query("update users set name='".$post["name"]."',pwd='".$request["pwd"]."',phone='".$request["phone"]."',setting='".$request["setting"]."' where ID=".$request["ID"].";");
        $connection->close();
    }
}
main();
?>