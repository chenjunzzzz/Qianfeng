<?php
    header("Content-type:text/html;charset=utf-8");
    function doGet(){
        $conn=new mysqli("localhost","root","","chat");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $result=$conn->query("select * from message where ".$_POST["condition"].";");
        $exist=0;
        while($row = mysqli_fetch_assoc($result)){
            $exist=1;
        }
        $conn->close();
        echo $exist;
    }
    doGet();
?>