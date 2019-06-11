<?php
    header("Content-type:text/html;charset=utf-8");
    function doGet(){
        $success=0;
        $conn=new mysqli("localhost","root","","chat");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $value="'".$_POST["user"]."','".$_POST["message"]."','".$_POST["mobile"]."','".$_POST["mail"]."','".$_POST["secret"]."','".$_POST["name"]."'";
        if($conn->query("insert into message (user,message,mobile,mail,secret,name) values (".$value.");")==true){
            $success=1;
        }
        $conn->close();
        echo $success;
    }
    doGet();
?>