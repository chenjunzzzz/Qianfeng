<?php
/*php代码的推荐语法格式:<?php coding ?>，以尖括号问号php开头，问好尖括号结束，coding表示php代码区。*/
header("content-type:text/html;charset=utf-8");         //设置编码

class SignUp{
    function main(){
        $request=$_POST;
        if($_SERVER["REQUEST_METHOD"]=="GET"){
            $request=$_GET;
        }
        if(isset($request["account"]) && isset($request["pwd"]) && isset($request["repeat"]) && $request["pwd"]==$request["repeat"]){
            $connection=new mysqli("127.0.0.1","root","root","Students1908");
            if($connection->error){
                die("connection error!");
            }else{
                if($connection->query("insert into students (s_name,encrypt) values ('".$request["account"]."','".$request["pwd"]."');")>0){
                    echo "{code:2000,comment:'success'}";
                }else{
                    echo "{code:1001,comment:'failed'}";
                }
                $connection->close();
            }
        }else{
            echo "{code:1001,comment:'error parameter'}";
        }
    }
}
$sign=new SignUp();
$sign->main();
?>