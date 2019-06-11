<?php
    function main(){
        $request=$_POST;
        if($_SERVER["REQUEST_METHOD"]=="GET"){
            $request=$_GET;
        }
        $start=$request["start"];
        $size=$request["size"];
        $result='[';
        for($i=$start+1;$i<$start+$size+1 && $i<=75;$i++){
            $result=$result.'{"img": "images/'.$i.'.jpg","url": "http://www.baidu.com"},';
        }
        echo $result.']';
    }
    main();
?>