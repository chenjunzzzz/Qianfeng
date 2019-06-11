/**
 * 多属性缓冲运动函数封装
 *
 * 1.可以同时改变多个属性
 * 2.具有通用性
 * 3.实现动画效果
 */
class Animate{
    /**一般什么时候需要定义属性？
     * 某个值或者变量需要多处使用的时候就可以把该变量定义位属性
     */

    constructor(_target,_css,_time,_fx,_delay){
        this.target=_target;
        this.hz=30;
        this.time=_time;//不知道以后还不会不用，所以先保留
        this.times=_time/this.hz;
        this.css=_css;
        this.counter=0;
        this.fx=_fx;
        this.delay=_delay;
    }
    opacity(){
        let _me=this;
        //this 不允许被赋值，但可以通过函数来改变this指向
        let o_step,h_step,v_step;
        let _base=Number(_me.target.style.opacity);//作用：获取行内样式opacity
        let _opacity=Number(window.getComputedStyle?window.getComputedStyle(_me.target,null)["opacity"]:_me.target.currentStyle["opacity"]);//获取外部样式表的opacity
        _base=_base?_base:_opacity;//拿到合理opacity

        o_step=(this.css.opacity-_base)/this.times;//计算步长
        h_step=(parseInt(this.css.left)-this.target.offsetLeft)/this.times;
        v_step=(parseInt(this.css.top)-this.target.offsetTop)/this.times;

        this.timer=window.setInterval(function(){//定时器的作用：循环改变opacity属性
            _me.target.style.opacity=(_base+=o_step);//修改dom元素的opacity
            _me.counter++;//执行了多少次

            _me.target.style.left=_me.target.offsetLeft+h_step+"px";
            _me.target.style.top=_me.target.offsetTop+v_step+"px";

            if(_me.counter>=_me.times){//作用：满足次数后需要停止定时器。
                window.clearInterval(_me.timer);
                _me.target.style.opacity=_me.css.opacity;
                _me.target.style.left=_me.css.left+"px";
                _me.target.style.top=_me.css.top+"px";
                if(_me.fx){
                    _me.timer=window.setInterval(function(){
                        window.clearInterval(_me.timer);
                        _me.fx();
                    },_me.delay);
                }
            }
        },_me.hz);
        return this;
    }
}