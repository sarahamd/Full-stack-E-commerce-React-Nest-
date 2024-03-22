var myObj={
    usrname:"momen",
    age:10,
    [Symbol.iterator]:function(){
        var mykeys = Object.keys(myObj)//["usrname","age"]
        var myvalues = Object.values(myObj)//["mariam","10"]
        var counter = 0
        return {
            next:function(){
                if(counter<mykeys.length){
                    return {key:mykeys[counter],value:myvalues[counter++],done:false}
                }
                else{
                    return {value:undefined,done:true}
                }
            }
        }
    }
}

var iterator = myObj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for(var elem of myObj){
    console.log(elem)
}
