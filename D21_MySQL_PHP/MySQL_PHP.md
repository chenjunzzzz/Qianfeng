### 课程任务与学习目标
* 了解前后端的一些正常的业务流程
* 达不到精通，或者特别的深入学习
    * 面试的时候前后台交互机制一定要回答上来
    * 自己实现登录注册接口，目的是要大家都先接触一下真实的开发中，前后台联调的业务流程。
---
### MySQL：数据库管理软件
* 数据库：存数据的容器。
* 关系型数据库:每张表有固定的结构关系
* 非关系型代表：MongoDB
```javascript
/*mongondb 数据表中不需要有固定的结构关系[{
    ID:
    name:
},{
    ID:
    name:
}]*/
```
* SQL:struct query language 结构化查询语句
* phpstudy的安装
* navicat的安装
---
### MySQL navicat 使用
* 创建链接
* 创建数据库
* 创建表
* 创建主键
* insert 语句: insert into 数据库名.表名 (字段名1,字段名2....) values ();
    * insert into students (s_name,sex,phone,score,profession) values ('lisi',1,'12345678910',90,'WEB前端高级编程');
* select 语句: select * from 数据库名.表名;
    * *表示所有字段
    * select * from students;
* update 语句: update students1908.students set sex=0,s_name='wangwu' where s_name='zhangsan';
* where 语句的简单应用
    * not in 
    * in
    * exist
    * and
    * like
* delete 语句
    * delete from students1905.students where false;
---- 
### 总结：
* 增：insert into students (s_name,sex,phone,score) values ('lisi',1,'12345678910',80);
* 删：delete from students where ID=2;
* 改：update students set sex=0,s_name='wangwu' where ID=1;
* 查：select * from students where sex=1;
---
### PHP
* 将自己电脑编程可以提供所有人访问的服务器。
* 服务器的概念http://image.baidu.com:80/
    * 服务器的作用：一般用来响应客户端请求。
        * 存储文件
        * 设置一些其他的服务
    * HTTP协议：超文本传输协议（hyper text transfer protocol）
        * http:表示协议
        * www.baidu.com：域名。
            * 域名和IP之间有什么关系？
                * 同一个IP可以绑定若干个域名。
        * 端口号的作用：应用程序的入口。
        * 以上三个都相同的情况下称为同源策略。
    * 常见的协议有哪些？
        * ftp、smtp、pop3、ws
* PHP的简单介绍：运行在Apache服务器端的弱类型脚本语言
* PHP是如何运行的：有可以解释PHP的服务器解释执行。
* PHP的语法：<?php   /*coding*/  ?>
    * 学会声明变量:php 没有声明变量这个环节
        * echo:相当于document.write;
    * if 条件语句和JavaScript一摸一样
    * for 和JavaScript依然一样
    * 函数：和JavaScript一样
    * 面向对象：
    ```PHP
    class Animal{
        function run(){
            
        }
    }
    ```
    * $_GET、$_POST 获取网页form表单中的参数都是需要表单元素具有name属性的。
* PHP接口编程
  * 实现登录接口

    ```PHP
    <?php
    /*
    php代码的推荐语法格式:<?php coding ?>，以尖括号问号php开头，问好尖括号结束，coding表示php代码区。
    */
    header("content-type:text/html;charset=utf-8");         //设置编码
    
    class SignIn{//申明一个类和js中的ES6语法相同
        function get(){//申明一个方法，同js语法基本差不多
            echo "get";//在页面上输出内容，同js中document.write
        }
        function post(){
            $post=$_POST;//申明变量必须以"$"开头，$后面还是跟字母下划线，阿拉伯数字不能紧跟$后面
            if(isset($post["account"]) && isset($post["pwd"]) && $post["account"]=='Ghost1001' && $post["pwd"]=='123456'){
                //isset()是PHP系统内部提供的方法，判断括号内的内容是否存在的意思。
                //$post["account"]表示获取前端传输到后台的用户账号，是系统提供的全局变量，account必须和HTML中的form表单控件的name属性一致
                
                //这个if的主要逻辑是，判断用户名和密码必须等于指定的值时才能显示登录成功
                echo '登录成功';//实际工作中登录成功后是要跳转到另外一个页面中的，比如淘宝，登录成功后可以跳转到用户中心。显示用户信息的。
            }
        }
        function main(){//main方法主要作用是判断用户端给出的请求是POST请求，还是GET请求
            if($_SERVER['REQUEST_METHOD'] == 'GET'){
                $this->get();
            }
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $this->post();
            }
        }
    }
    $sign=new SignIn();
    $sign->main();
    ?>
    ```

    

  * 实现注册

    ```PHP
    <?php
    /*
    php代码的推荐语法格式:<?php coding ?>，以尖括号问号php开头，问好尖括号结束，coding表示php代码区。
    */
    header("content-type:text/html;charset=utf-8");         //设置编码
    
    class SignUp{
        function get(){
            echo "get";
        }
        function post(){
            $post=$_POST;
            if(isset($post["account"]) && isset($post["pwd"]) && isset($post["repeat"]) && $post["pwd"]==$post["repeat"]){
                //if语句的逻辑思维是，需要三个参数，其中一个是用户账号，另一个是第一次输入的密码，最后一个重复输入的密码，为什么要重复输入密码。目的是规避第一次不小心多输入一个或者少输入一个字符。两次校验基本可以完美解决问题。
                echo '注册成功';
            }else{
                //一下这一小段代码是为了给出精准提示。如果是两次输入的密码不匹配，提示密码输入错误，如果是三个参数不全，就要报错：系统参数错误。
                if(isset($post["repeat"]) && $post["pwd"]!=$post["repeat"]){
                    echo "两次输入的密码不匹配";
                }else{
                    echo "系统参数错误";
                }
            }
        }
        function main(){
            if($_SERVER['REQUEST_METHOD'] == 'GET'){
                $this->get();
            }
            if($_SERVER['REQUEST_METHOD'] == "POST"){
                $this->post();
            }
        }
    }
    $sign=new SignUp();
    $sign->main();
    ?>
    ```

  

* PHP创建链接到MySQL

  ```PHP connect MySQL
  $connection=new mysqli("127.0.0.1","root","root","db_study");//实例化一个MySQL链接
  if($connection->error){//判断链接是否成功
      die("connect error!");//如果失败，结束并输出一个提示信息
  }else{//如果成功执行一下信息
      if($rs=$connection->query("select * from user;")){
          //query方法可用于查询更新数据库信息
          while($row=$rs->fetch_assoc()){//循环遍历数据库中表内的数据，每次循环读出一条数据并赋值给$row变量，一条信息就是表中的一行信息
              echo $row["name"];//获取某个字段值并打印出来
          }
      }
      $connection->close();//读取完毕以后，关闭数据库链接。目的节省数据库开销，否则数据库容易崩溃
  }
  ```
---
### 拓展内容：http状态码
* 1**：指示信息--表示请求已接收，继续处理
* 2**：成功--表示请求已被成功接收、理解、接受
* 3**：重定向--要完成请求必须进行更进一步的操作
* 4**：客户端错误--请求有语法错误或请求无法实现
* 5**：服务器端错误--服务器未能实现合法的请求

* 200 OK      //客户端请求成功
* 400 Bad Request  //客户端请求有语法错误，不能被服务器所理解
* 401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用 
* 403 Forbidden  //服务器收到请求，但是拒绝提供服务
* 404 Not Found  //请求资源不存在，eg：输入了错误的URL
* 500 Internal Server Error //服务器发生不可预期的错误
* 503 Server Unavailable  //服务器当前不能处理客户端的请求，一段时间后可能恢复正常
---
### 总结可以发出HTTP请求的HTML标签
* a、img、link、script....
---
### 拓展：经验总结
* http服务器的http请求资源是很宝贵的，如何优化？面试过程中会有这样的问题，挺多的。
* link标签主要用来链接外部样式表的，那么就要压缩样式，让样式绝对小，同时也要合理的合并样式表
* script和link标签基本相同，用来关联外部js用。js也可以压缩合并。
* a标签目前没有什么好的优化方案。
* img标签是链接图片用，图片一般也可以压缩合并，降低图片品质但保证视觉效果不会有差异。压缩图片这个工作一般由UI设计师完成。合并图片一般可以由我们自己完成，这是对HTTP请求优化的一些方案。
---
### POST|GET请求
---
### 链接数据库的基本操作
* 建立桥梁：mysql链接
* 判断桥梁是否搭建成功
* success->增删改
    * 查询
        * 先将数据库中的数据读取到内存中
        * 变量保存记录集
        * 循环读取记录
        * 行对象["字段名"];
