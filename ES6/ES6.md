# ES6

> 1.ajax 异步和同步的关系

    new Promise((reslove,reject)=>{
        执行内容
    }).then(res =>{
        console.log(res)
    }).catch(e=>{
        console.log(res)
    })

> let conset 用来声明变量
> conset 声明一个只读的变量

   如果函数体内包含的语句多余一条就需要使用大括号将函数体扩起来使用return语句返回

   ES6允许按照一定模式从哪数组的对象中提取值对变量进行赋值这被称为解构

> 2.ES6构造函数

    function Requset(){

    }
    Requset.prototype={
        init(){

        },
    }
    new Requset()

> 3.console.log(myDiv.style.width)这种方式是获取行内样式的 既可以获取也可以设置的方法

> 4.btn.onclick=()=>{ 箭头函数中的this指向—定义—时候的上下文}

    set 新增的数据结构，它自身能过滤多余的元素;

    let obj = new Set(数组名)

    Array.from(obj) 对象转换数组

    对象去重
     var myobj = {};
     for(var i = 0;i<数组.length; i++){
        if(!myobj[brr[i]]){
            myobj[brr[i]]=1
        }else{
            myobj[brr[i]] ++
        }
     }
     console.log(myobj)

    var brr = ["hello world","vvvv","bbbb"];
    var reg = new RegExp("h");
    brr.map(item = >{
        console.log(item.match())
    })
