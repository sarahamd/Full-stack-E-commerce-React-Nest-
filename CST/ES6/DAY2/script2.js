var str1 = "helloworld"; //<15
var str2 = "helloworldddddd"; //=15
var str3 = "helloworlddddddttttttttttttttt" ;//>15


var myOwnObj={
    [Symbol.replace]:function(str){
        if(str.length>15)
        {
            var str_len15=str.slice(0,15);
            return str_len15.concat("...");
        }
        else{
            return str
        }
    }
}

console.log(str1.replace(myOwnObj));
console.log(str2.replace(myOwnObj));
console.log(str3.replace(myOwnObj));


















