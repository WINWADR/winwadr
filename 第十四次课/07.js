
;(function(x)){
    console.log("this is chestnut")
    return (function(x)){
        console.log("this is haw")
        x()
        x.printName=function(){
            console.log(this.name)
            return this.name
        }
        return 200+x.printName()+x()
    })(()=>{
        this.name=6666
        console.log("this is pitaya")
        return 3999
    })
}