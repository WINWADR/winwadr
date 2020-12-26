var pi=function pitaya(){
    console.log("我是水蜜桃")
}()
let peal='return' +'`我是一棵${name}`';
let peanut5=new Function('name',peal);
console.log(peanut5("猕猴桃"))
var peanut6=function(name){
    return "我是一颗"+name;
}
let melon = {}
let melon2={
    name:"番茄",
    price:20,
    weight:2,
    origin:"海南省",
    color:false,
    nut:{
        name:"我是番茄的种子",
        price:40
    },
    printprice:function(){
        console:log("我是价格")
    },
    priceOrign:()=>{
        .log("原产地")
    }
}
var melon3=new Object()
var melon4=new Object({})
function Person(name,sex,age,address){
    this.name=name
    this.sex=sex,
    this.age=age,
    this.address=address,
    this.sayName=fuction(){
        console.log(thids.name)
    }
}
Person.prototype.sayName2=function(){
    console.log("this is name 2")
}
var p1=new Person("近微","女",20,"武汉市")
console.log(p1);
