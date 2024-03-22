/*
var num1= prompt("enter a num1" ,"0");
num1=parseInt(num1);
var num2= prompt("enter a num2" ,"0");
num2=parseInt(num2);
var type= prompt("enter a odd or even or no" ,"even");
var sum=0;
var i;
if(type == "odd")
{
    for(i=num1;i<=num2;i++)
    {
        if(i%2!=0)
        {
            document.write(i+"<br>");
            sum=sum+i;
        }
    }
    document.write("the sum is "+ sum);
}
if(type == "even")
{
    for(i=num1;i<=num2;i++)
    {
        if(i%2==0)
        {
            document.write(i+"<br>");
            sum=sum+i;
        }
    }
    document.write("the sum is "+ sum);
}
if(type == "no")
{
    for(i=num1;i<=num2;i++)
    {
        document.write(i+"<br>");
        sum=sum+i;
    }
    document.write("the sum is "+ sum);
}
*/
var num1= prompt("enter a num1" ,"0");
num1=parseInt(num1);
var num2= prompt("enter a num2" ,"0");
num2=parseInt(num2);
var type= prompt("enter a odd or even or no" ,"even");
var sum=0;
var i;
if(num2<num1)
{
    if(type == "odd")
    {
        for(i=num1;i>=num2;i--)
        {
            if(i%2!=0)
            {
                document.write(i+"<br>");
                sum=sum+i;
            }
        }
        document.write("the sum is "+ sum);
    }
    if(type == "even")
    {
        for(i=num1;i>=num2;i--)
        {
            if(i%2==0)
            {
                document.write(i+"<br>");
                sum=sum+i;
            }
        }
        document.write("the sum is "+ sum);
    }
    if(type == "no")
    {
        for(i=num1;i>=num2;i--)
        {
            document.write(i+"<br>");
            sum=sum+i;
        }
        document.write("the sum is "+ sum);
    }
}
else if(num1<num2)
{
    if(type == "odd")
    {
        for(i=num1;i<=num2;i++)
        {
            if(i%2!=0)
            {
                document.write(i+"<br>");
                sum=sum+i;
            }
        }
        document.write("the sum is "+ sum);
    }
    if(type == "even")
    {
        for(i=num1;i<=num2;i++)
        {
            if(i%2==0)
            {
                document.write(i+"<br>");
                sum=sum+i;
            }
        }
        document.write("the sum is "+ sum);
    }
    if(type == "no")
    {
        for(i=num1;i<=num2;i++)
        {
            document.write(i+"<br>");
            sum=sum+i;
        }
        document.write("the sum is "+ sum);
    }
}
