# class 类

  JS 本身没有类 ES5 的类是 构造函数 + 原型模拟的类
  
> ES5 语法 ：

    function Person(name,age){
        this.name = name
            this.age = age

    }
    Person.prototype.sayName = function(){
        consloe.log(this.name)
    }
    Person.prototype.setName = function(){
        this.name = name
    }
    var cla = new Person('lili',18)
    cla.sayName() // lili  

> ES5 继承

    继承.prototype =  Object.create(被继承.prototype)
    继承.prototype.constructor = 继承

> ES6 class 语法糖

    class Person{ 不可以写逗号
        只能写方法
            constructor(name,age){ 默认方法 如果没写 constructor 方法会默认添加上
        this.name = name;
        this.age = age;
        }
            sayName(name){
            this.name = name;
        }
        static play(){方法在实列上调不到 需要使用类调 只能用实列来调 Person.play()
        静态
        }
    }

> ES6 继承

    class Student extends Person{
        constructor(){
            super()
        }
        learn(){

        }
    }

    let stu1 = new Student()