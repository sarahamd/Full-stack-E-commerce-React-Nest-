function dispVal(obj,property)
{
    
 return obj[property];
}
var obj={ 
    name:"mariam",
    age:"23"
        };
var result=dispVal(obj,"age");
var result=dispVal(obj,"name");
console.log("the value of the property is ",result);