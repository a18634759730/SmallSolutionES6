## module 

> ES6之前

    require.js --> AMD --> 异步加载 --> 浏览器端

    定义模块：define 加载模块：require

    node.js --> commonjs规范 --> 同步加载 -->服务器端

    抛模块：module.exports 加载模块：require

    这些都社区制定的规范

## ES6

    抛模块:export  载入模块:import

    一个模块只能有 一个 export.default

    同过bable转译

    抛模块语法
    export let reverse = (str) => {
        return str.split('').reverse().join('')
    }

    简写语法

    let a = 'lian'
    let b = 'jing'
    let c = 'hong'

    export = {a,b,c}


    as 起别名
    export = {a as A,b as B,c as C}  
    载入
    import{A,B,C}

    载入模块语法
    import{reverse} form './reverse'
    console.log(reverse('abc')) //cba
