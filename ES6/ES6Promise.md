# ES6:Promise

    Promise ES6原生提供的一个对象 此对象是构造函数 可以获取异步请求的信息

    Promise 解决异步编程的方案;可以把异步操作以同步的操作方式写出来，不用再层层嵌套

    Promise 代表一种异步操作 有三种状态

    pending（进行中） fufilled（已成功） rejected(已失败)
  
   用法:
  
    let p = new Promose(（resolve,reject）=>{
        resolve()和reject()都是函数
        成功
        resolve()
        失败
        reject()
    })

    (1)resolve的prototype(原型)方法

    1.then(成功的回调，失败的回调) 为实列添加状态变化时回调函数

    2.catch(回调函数)  报错时的回调

    3.finally(回调函数) 不管状态成功失败都执行这个函数

    4.all([promise1,promise2])   把多个promise对象包装成一个promise对象
