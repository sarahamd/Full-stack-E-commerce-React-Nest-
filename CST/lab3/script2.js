var inputNum;
var sum=0;
do{
    inputNum=prompt("enter a num" ,"10");
    inputNum=parseFloat(inputNum);
    sum=sum+inputNum;
}while(inputNum!=0 && sum<100)

document.write("the sum is "+sum);


/*for typeof */
/*
var inputNum;
var sum=0;
do{
    inputNum=prompt("enter a num" ,"10");
    inputNum=parseFloat(inputNum);
    if(typeof(inputNum)== "number"){
        sum=sum+inputNum;
    }
    else{
        inputNum=prompt("please,enter a num" ,"10");
        inputNum=parseFloat(inputNum);
    }
}while(inputNum!=0 && sum<100)

document.write("the sum is"+sum);
*/