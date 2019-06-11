<?php
    header("Content-type:text/html;charset=utf-8");
    function doGet(){
        $success=false;
        $conn=new mysqli("localhost","root","","chat");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $pattern1='/^\w{6,20}$/';
        $pattern2='/^\w{6,80}$/';
        //echo preg_match($pattern1,$_GET["user"]);
        if(preg_match($pattern1,$_GET["user"]) && preg_match($pattern2,$_GET["message"])){
            if($conn->query("insert into message (user,message) values ('".$_GET["user"]."','".$_GET["message"]."')")==true){
                $success=true;
            }
        }
        $conn->close();
        echo $success;
    }
    doGet();
?>