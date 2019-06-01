# 对象 Object

## ES5
    1.合并对象
    let obj1 = {name:"hong",age:"23",sex:"男"}
    let obj2 = {name:"tian",age:"23",sex:"女"}
    function extend(o,...arr){
    console.log(arr) //[{},{name:"hong",age:"23",sex:"男"},{{name:"tian",age:"23",sex:"女"}}]
    arr.forEach(function(item){
        for(let key in item){
            o[key] = item[key]
            }
    })
    return o
    }
    console.log(extend({},obj1,obj2)); 

## ES6

    1.合并对象
    object.assgin(obj1,obj2) 
    合并对象 会修改第一个参数 并且把第一个参数返回来  返回值 第一个参数

    let obj1 = {name:"hong",age:"23",sex:"男"}
    let obj2 = {name:"tian",age:"23",sex:"女"}
    let obj3 = {}
    let target = object.assgin(obj3,obj1,obj2) 
    //{name:"tian",age:"23",sex:"女"}
    console.log(target===obj3)  
    //true {name:"tian",age:"23",sex:"女"}

> 2.rest参数
> rest参数 ...params  ... + 参数名必须放在最后 值为剩余参数组成的数组

> 3.可枚举的属性

    for(var i in obj){
        console.log(i) //name age //可枚举的属性
    }

    value:10,     属性值
    writable:true, 是否可修改
    enumerable:true, 是否可枚举
    configurable:true 是否可配置

> 4.获取属性的描述对象

    obj.getOwnPropertyDescriptor(obj,address) 

> 5.新建属性或者修改属性

    obj.defineProperty(obj,age,{
        value:10,
        writable:true,
        enumerable:true,
        configurable:true
    })

    obj.keys() 所有的键组成的数组

    obj.valyes() 所有的值组成的数组

    obj.entries() 所有的键值组成的数组

    obj.is() 判断两个值是否相等

    new Set() 没有重复的值

    new Map()

## ...待扩展 