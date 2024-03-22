function fun(...arr){
   
    let max= Math.max(...arr);
    let min= Math.min(...arr);
    let result=[max,min];
    // console.log("the max is "+ Math.max(...arr) 
    // +" the min is "+ Math.min(...arr));
    return result
}

arr1=[1,0,10,5,6,7];
// arr2=[-1,0,100,5,6,7];
console.log(fun(...arr1));
// console.log(fun(...arr2));
[maximum,minimum]=fun(...arr1);
console.log("max is "+maximum);
console.log("min is "+minimum);

