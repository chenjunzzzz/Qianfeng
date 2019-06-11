var _outline=[
    '主要任务与目的',
    '工厂模式\\n' +
    '抽象工厂模式\\n' +
    '策略模式\\n' +
    '代理模式\\n' +
    '适配器模式',


    '工厂模式：',
    '简单讲就是可以像工厂中流水线上生产产品一样生产对象\\n' +
    '定义了一个创建产品对象的工厂接口，将实际创建工作推迟到子类工厂当中。',


    '工厂模式的实现',
    'function factory(){\\n' +
    '        var _product={};\\n' +
    '        _product.wheel=4;\\n' +
    '        _product.set=4;\\n' +
    '        _product.driver=function(){\\n' +
    '            console.log("go");\\n' +
    '        };\\n' +
    '        return _product;\\n' +
    '    }\\n' +
    '    var _car01=factory();\\n' +
    '    var _car02=factory();',



    '抽象工厂模式：',
    '使用抽象工厂的一般需求：（以笔记本为例）\\n' +
    '1：产品需要分级，如PC机工厂的下一级工厂有CPU，显示器、键盘.......\\n' +
    '2：下级工厂如CPU可以是intel||amd，性质相同但是又有不同的时候\\n' +
    '3：需要以一个工厂面提供使用，也就是说逻辑相当复杂，封装的类以一个简单的形式存在提供使用',


    '抽象工厂实现',
    'function cpu(_name,_config,_platform){\\n' +
    '        return {\\n' +
    '            name:_name,\\n' +
    '            config:_config,\\n' +
    '            platform:_platform\\n' +
    '        };\\n' +
    '    }\\n' +
    '    function screen(_name,_size,_type){\\n' +
    '        return {\\n' +
    '            name:_name,\\n' +
    '            size:_size,\\n' +
    '            type:_type\\n' +
    '        }\\n' +
    '    }\\n' +
    '\\n' +
    '    function PCFactory(){\\n' +
    '        return{\\n' +
    '            screen:screen("AOC","40寸","液晶"),\\n' +
    '            cpu:cpu("intel","16核32线程","sky lake")\\n' +
    '        };\\n' +
    '    }\\n' +
    '    var _pc=PCFactory();',



    '策略模式',
    '同一个方法，根据自己的需求不同可以执行不同的代码。',

    '策略模式的实现方式',
    'class Subtract{\\n' +
    '        calc(a,b){\\n' +
    '            console.log(a-b);\\n' +
    '        }\\n' +
    '    }\\n' +
    '\\n' +
    '    class Divide{\\n' +
    '        calc(a,b){\\n' +
    '            console.log(a/b);\\n' +
    '        }\\n' +
    '    }\\n' +
    '\\n' +
    '    class Strategy{\\n' +
    '        change(_strategy){\\n' +
    '            this.strategy=_strategy;\\n' +
    '            return this;\\n' +
    '        }\\n' +
    '        calc(a,b){\\n' +
    '            this.strategy.calc(a,b);\\n' +
    '        }\\n' +
    '    }\\n' +
    '\\n' +
    '    var _strategy=new Strategy();\\n' +
    '    \\n' +
    '    _strategy.change(new Divide());\\n' +
    '    _strategy.calc(9,3);\\n' +
    '    \\n' +
    '    _strategy.change(new Subtract());\\n' +
    '    _strategy.calc(9,3);',


    '策略模式的使用',
    'JS实现Java中多态',



    '代理模式',
    'class Delegator{\\n' +
    '        thirsty(){\\n' +
    '            return "thirsty";\\n' +
    '        }\\n' +
    '    }\\n' +
    '    class Agent{\\n' +
    '        water(){\\n' +
    '\\n' +
    '        }\\n' +
    '        done(_arg){\\n' +
    '            console.log(_arg);\\n' +
    '            this.water();\\n' +
    '        }\\n' +
    '    }\\n' +
    '\\n' +
    '    var _delegate=new Delegator();\\n' +
    '    var _agent=new Agent(_delegate.thirsty());',

    '代理模式的使用场景非常多',
    '1.事件委托\\n' +
    '2.一般需要频繁处理相同的问题的时候，建议使用代理模式'
];