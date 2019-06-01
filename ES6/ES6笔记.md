# ES6

    全称ECMAScript6.0 是javascript语言的下一个标准 2015年6月发布

    javascript和ECMAScript的关系

    javascript = DOM + BOM + ECMAScript(核心)

    WEB的三个标准 html css js 结构 样式 行为

    javascript和ECMAScript的实现 ECMAScript是javascript的标准

    babel 是一个javascript变压器 ES6--ES5 jsx 转译

    下载
    npm instart babel-cli -g

    在根目录创建文件
    .babelrc

    {
        "presets": ["@babel/preset-env"]
    }
  
 babel 配置插件
 npm install @babel/preset-env --save-dev

 转单个文件 babel 要转译的文件路径 -o 转译的地址

 转多个文件 babel ./scr/js  -d  ./dist/js

 监听 babel ./scr/js  -d  ./dist/js --watch

 let const

 ES5 var

 ES6 let const

 var 在ES5里有变量提升,在ES6里面没有

 let 在ES6里面声明的变量不会成为window的属性

 ES5:

    局部作用域和全局作用域

 ES6:

    没有变量提升

    块级作用域 {}

    在同一个作用域内不能重复定义变量

    暂时性死区

 暂时性死区：
   在局部定义的变量会暂是封锁这个区域内 其他和它名字相同的变量都不可用

 const 定义的是常亮以后不能再修改,必须要初始值

> 解构赋值

    ES6允许我们按照一定模式去对象或数组里面取值给变量赋值

    特点

    1.给变量赋值

    2.来源：数组或者对象

    3.规则：按照一定的模式

> 数组解构

    let a = 0;
    let b = 1;
    console.log(a,b)

    let arr = [0,1]
    console.log(arr[0],arr[1])

    let [c,d] = [0,1]
    console.log(c,d)

    let [a, ,c] = [3,4,5]
    console.log(a,c)

    let [a,b] = [12,[8,2]]
    console.log(a,b)  

> 对象

    let obj = {name:"tl",age:18};

    console.log(obj.name)

    console.log(obj.age)


    let obj = {name:"tl",age:18};

    let{name,age} = obj

    console.log(name,age)

> 函数

    function getDate(){

        let date = new Date()

        let y = date.getFullYear();

        let m = date.getMonth() + 1;

        return {y:y,m:m} //{y,m}属性名也是变量名 属性值是变量的值

    }
    console.log(getDate())
