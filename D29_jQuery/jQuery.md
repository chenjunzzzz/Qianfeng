### jQuery是什么？
> jQuery是JavaScript的方法库。也就是说jQuery中保存了非常丰富的原生JavaScript方法，可供我们随时调用。
并且不需要我们做很多的工作。

* [jQuery官网](https://jquery.com)
* [jQuery中文文档接口](http://jquery.cuishifeng.cn/index.html)
---
### 学习要点
* jQuery的Ajax
```javascript
$.ajax({
    url:"http://localhost:8080/HTML5/API/JSONP_Query.php",
    jsonpCallback:"success",//跨域请求的参数
    dataType:"jsonp",//跨域请求的参数
    success:function(_data,_status){
        console.log(_data);
    }
});
```
* jQuery选择器
* jQuery筛选
* 文档处理
* jQuery事件
* jQuery动画
* jQuery核心
* jQuery继承
---

