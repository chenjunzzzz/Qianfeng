/**
 * 功能分析：
 *      1.点击数字，显示相应的内容
 *      2.点击最后一个按钮时，将所有的按钮位置向前移动一半
 *      3.点击第一个按钮时，将所有的按钮位置向后移动一半
 *
 *
 * 可能会出现的bug：
 *      1.可能会翻多了，超过了数据真实的页码值。
 *      2.如果在第一页时，上一页的按钮就禁用。
 *      3.点击向后翻页按钮，注意不能超出页码值。
 */
function Divider(){
    var _me=this;
    this.start=0;
    this.size=2;
    this.list=document.getElementById("list");
    this.events=function(_data){
        var _pbtn=$(".pagination li");
        _pbtn.click(function(){
            if($(this).index()>=1 && $(this).index()<=5){//当用户点击边缘的页码值时，不能继续再点击后面或者前面的内容
                // -----未处理
                _me.start=(Number($(this).find("a").html())-1)*_me.size;
                _me.show(_data);
                //TODO..修改页码值
                if($(this).index()===1 && Number($(this).find("a").html())>=3/*是否到达边缘*/) {
                    _pbtn.each(function (i, _element) {
                        if (i >= 1 && i <= 5) {
                            $(this).find("a").html(Number($(this).find("a").html()) - 2);
                        }
                    });
                }
                if($(this).index()===5 && Number($(this).find("a").html())*_me.size<_data.length/*是否到达边缘*/) {
                    _pbtn.each(function (i, _element) {
                        if (i >= 1 && i <= 5) {
                            $(this).find("a").html(Number($(this).find("a").html()) + 2);
                        }
                    });
                }
            }
            if($(this).index()<1){//页码值小于1时   -----未处理 ----已完成
                if(_me.start>_me.size) {
                    _me.start -= _me.size;//有可能出现负数
                    _me.show(_data);
                    //TODO..修改页码值
                    if (_me.start + 2 === _pbtn.eq(1).find("a").html() * _me.size/*是否到达边缘*/) {
                        _pbtn.each(function (i, _element) {
                            if (i >= 1 && i <= 5) {
                                $(this).find("a").html(Number($(this).find("a").html()) - 2);
                            }
                        });
                    }
                }
            }
            if($(this).index()>5){//超过第5页时没有实现按钮上的数字改变    -----未处理   -----已完成
                _me.start+=_me.size;
                _me.show(_data);
                //TODO..修改页码值
                if(_me.start+_me.size===_pbtn.eq(5).find("a").html()*_me.size/*是否到达边缘*/) {
                    _pbtn.each(function (i, _element) {
                        if (i >= 1 && i <= 5) {
                            $(this).find("a").html(Number($(this).find("a").html()) + 2);
                        }
                    });
                }
            }
        });
    };
    this.show=function(_data){
        var _lis="";
        for(var i=this.start;i<this.start+this.size && i<_data.length;i++){
            _lis+="<li>"+"article"+(i>=9?(i+1):"0"+(i+1))+"："+_data[i]["article"+(i>=9?(i+1):"0"+(i+1))]+"</li>";
        }
        this.list.innerHTML=_lis;
    };
    this.load=function(){
        $.ajax({
            url:"json/article.json",
            success:function(_data,_status){
                if(_status==="success") {
                    _me.show(_data);//把数据分页显示在网页上，每页两条数据
                    _me.events(_data);//给每个分页按钮添加事件
                }
            }
        });
    };
}

$(function(){
    var _divider=new Divider();
    _divider.load();
});