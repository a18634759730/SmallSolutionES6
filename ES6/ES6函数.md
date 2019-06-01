# 函数的扩展

> 1.函数的默认值

    ES5

    function ajax(type){
        type = type || "get"
    }
    ajax("post")

    ES6
    function ajax(type='get'){
        console.log(type)
    }
    ajax()

> 2.rest参数

    ... 参数名必须放在后面
    值为剩余参数数组组成

> 3.箭头函数
  
    只有一参数（）可以省略

    代码只有一句话的时候 {} 可以省略
  
> 4.3个特点

    1.不可以做构造函数
    2.没有arguments
    3.this指向问题

> ES6 this

    指向 定义函数所在的对象

> ES5  this

    指向调用对象
    构造函数与普通函数的区别:构造函数用new调用
