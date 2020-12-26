function Pear (name,price,orign,weight){
    this.name=name,
    this.price=price,
    this.orign=orign,
    this.weight=weight;
    this.printName=function(){
        console.log("this is pear"+this.name)
    }
}
Pear.prototype.printName=function(){
    console.log("this is printName2")
}
var p1=new Pear("一号梨子",12,"河南",10)
p1.printName()
P2.printName2()
