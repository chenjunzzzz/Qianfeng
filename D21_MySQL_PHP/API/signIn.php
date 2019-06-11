<?php
/*
php代码的推荐语法格式:<?php coding ?>，以尖括号问号php开头，问好尖括号结束，coding表示php代码区。
*/
header("content-type:text/html;charset=utf-8");         //设置编码解决中文乱码问题

//1.返回
//2.个人中心

class SignIn{
    function createConnection(){
        $connection=new mysqli("127.0.0.1","root","root","Students1908");//实例化一个MySQL链接
        //第一个参数表示：数据库的主机地址
        //第二个参数：数据库账号
        //第三个参数：数据库密码
        //第四个参数：数据库名称
        if($connection->error){//判断链接是否成功
            die("connect error!");//如果失败，结束并输出一个提示信息
        }else{//如果成功执行一下信息
            $request=$_POST;
            if($_SERVER["REQUEST_METHOD"]=="GET"){
                $request=$_GET;
            }
            if(isset($request["account"]) && isset($request["pwd"])){
                if($rs=$connection->query("select * from students where s_name='" . $request["account"] . "' and encrypt='" . $request["pwd"] . "';")){
                    //query方法可用于查询更新数据库信息
                    while($row=$rs->fetch_assoc()){//循环遍历数据库中表内的数据，每次循环读出一条数据并赋值给$row变量，一条信息就是表中的一行信息
                        $account=$row["s_name"];
                        $_SESSION["account"]=$account;//保持登录
                        echo "{code:2000,account:'".$account."'}";
                        break;
                    }
                }
            }else{
                echo "{code:1001,comment:'miss parameter'}";
            }
            $connection->close();//读取完毕以后，关闭数据库链接。目的节省数据库开销，否则数据库容易崩溃
        }
    }
    function main(){//调度的作用
        session_start();//启用服务器端session，session的作用和cookie是相似的只是cookie保存在浏览器端，session是服务器端的数据而已。
        $request=$_POST;
        if($_SERVER["REQUEST_METHOD"]=="GET"){
            $request=$_GET;
        }
        if(isset($_SESSION["account"])){
            echo "{code:2000,account:'".$_SESSION["account"] . "'}";
        }else{
            $this->createConnection();
        }
    }
}
$sign=new SignIn();
$sign->main();
?>






