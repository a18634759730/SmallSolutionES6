ES6 promise Generator
ES7 async


# Generator

    1.Generator 也是解决异步编程的一种方案 返回值是遍历器对象

    2.for of 来循环获取里面的值也可以用 next()方法

    3.function* fn(){} fn()  

# async 函数

    ES2017标准引入了 async 函数

    async是 Generator 的语法糖

    语法

    1.async function getString(){awsit}

    2.let getString = async function(){awsit}

    注：return 返回值不是 promise 用Promise.resolve()转成promise对象
