# 数组
  
# ES5

    1.push()    在数组末尾添加

    2.unshift() 在数组开头添加

    3.pop()     在数组末尾删除

    4.shift()   在数组开头删除

    5.slice()   截取数组第一个参数是开始下标，第二个参数是结束下标

    6.splice()  截取数组第一个参数是开始下标，第二个参数是删除的个数 第三
    个参数添加的项目 可以改变原数组 修改数组

    7.concat()  合并数组

    8.every(function(item,下标,array){}) 遍历数组如果都满足条件返回true 有一项不符合返回false 返回值布尔值

    9.some(function(item,index,array){}) 遍历数组  只有一项条件满足 返回布尔值

    10.filter(function(item,下标,array){}) 过滤数组 返回值一个数组

    11.forEach() 循环数组 没有返回值

    12.map(function(item,index,array){}) 循环数组 有返回值

    13.indexOf() 查找数组里面是否包含指定元素 返回值 number 没有找到返回 -1

    14.join() 把数组以某个字符拼接成字符串

    15.reverse()  数组翻转

    16.sort()  数组排序

    17.reduce(function(pre,cur)) 接收一个函数作为累加器 数组中的每个值从左到右 开始缩减 最终计算一个值

## ES6

    ... 扩展运算符

    let arr1 = [1,2,3]
    let arr2 = [4,5,6]
    let arr = [...arr1,...arr2]
    console.log(arr) [1,2,3,4,5,6]

    18.Array.form(类数组,function(){})  把类数组转成数组

    19.Array.of(一组数据) 功能 把一组数据转成数组 弥补了Array()不足

    20.Array.portotype.copyWithin(从该位置开始替换,开始读取数据,结束读取数据) 替换数组 修改原数组

    21.Array.portotype.find(function(item,index,array){}) 查找数组的一个匹配项 没查到返回undefined

    22.Array.portotype.findIndex(function(item,index,array){}) 查找数组的匹配项 没查到 返回-1

    23.Array.portotype.fill(填充内容,开始下标,结束下标) 填充数组 不包括最后一项

    24.Array.portotype.includes(检测元素) 查找数组是否包含字符串 返回布尔值  

    25.indexOf() NaN的操作

    26.Array.portotype.flat() 把嵌套的数组拉平 参数可传可不传 默认为1

    27.for of 遍历器(Iterator)对象  entries()

    28.next()
    
## ...待扩展