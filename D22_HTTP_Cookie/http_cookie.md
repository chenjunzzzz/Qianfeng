### HTTP & Cookie

#### HTTP:超文本传输协议，也是一个无状态协议
> 本章内容主要了解：
* http的工作原理：

![step.gif](images\step.gif)
* 1、HTTP是一个基于TCP/IP通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。如何减少一个页面或者一个项目中的HTTP的次数，也就是如何优化HTTP请求页面的加载效率，有部分内容虽然提及到，但是会在后面章节中配合前端工程化工具一起使用。
    * TCP/IP:丢包少，速度慢。
    * UDP：丢包多，速度快。
* 2、知道HTTP是一个无状态协议：就是一个没有记忆功能的协议。比如说张三通过http协议访问我们的项目，但是访问完毕后不会留下任何痕迹。那么我们登录昨天的登录程序是怎么记得呢？
* 3、cookie、session
* 4、扩展：了解URI、URL概念：URI含URL、URN。URI：统一资源标识符。URL统一资源定位符，提供物理位置。
* 5、同源策略：同协议，同域名、同端口叫同源策略，如果有一个不同，就不是同源。
    * cookie遵循同源策略（具有有效期的，4-10K，会主动被发送到服务器上）；
    * localStorage也遵循同源策略（本地存储，存在自己的硬盘上，具有持久性，4-10M）
    * sessionStorage也遵循同源策略（会话级存储，浏览器关闭时就消失了）

#### Cookie学习

* cookie
  * 什么叫cookie：存储在本地的文本文件，用于记录浏览器访问网站的数据，例如购物车、或者一些其他需要缓存的数据，但是cookie只能保存非常小的数据，大的数据可以使用local storage（不在大纲要求范围内）来实现。
  * cookie特点：
    * 可以跨页面使用
    * 占用空间小4-10k左右的大小，小巧，方便速度快。**同源**项目共享一个cookie
  * 使用cookie：
    * 一起实现cookie的增删改查功能，以达到会使用cookie的目的
    * 面向对象的方式实现cookie的封装，以达到一次封装多次使用的效果
    * 利用封装好的cookie实现购物车
* localStorage
    * 本地存储
    * localStorage特点
        * 4M大小，可以跨页面使用
        * 遵循同源策略
* sessionStorage：会话级存储，浏览器关闭数据会消失。
---
### Cookie使用
* 获取cookie：
* cookie的数据类型：string
* cookie的操作：
    * 设置cookie：document.cookie="key=value;domain=localhost;path=/;expires="+今天的日期+未来日期段;
        * 一次只能设置一个cookie
    * 过期就是删除：document.cookie="key=value;path=/;expires=1970-01-01";
    * document.cookie一次可以获取同源策略下的所有cookie值.