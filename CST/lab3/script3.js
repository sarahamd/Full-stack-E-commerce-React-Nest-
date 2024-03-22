
var num1= prompt("enter a num1" ,"0");
num1=parseInt(num1);
var num2= prompt("enter a num2" ,"0");
num2=parseInt(num2);
var num3= prompt("enter a num3" ,"0");
num3=parseInt(num3);

if(num1%num2 ==0 && num1%num3 !=0)
{
    document.write(num1 + " is divisble by " + num2 +" only");
}
if(num1%num2 !=0 && num1%num3 ==0)
{
    document.write(num1 + " is divisble by " + num3 +" only");
}
if(num1%num2 !=0 && num1%num3 !=0)
{
    document.write(num1 + " is not divisble by both " + num2 +" & "+ num3);
}
if(num1%num2 ==0 && num1%num3 ==0)
{
    document.write(num1 + " is divisble by both " + num2 +" and "+ num3);
}
