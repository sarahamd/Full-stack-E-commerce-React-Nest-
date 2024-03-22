/*for user  name*/
var Input_name=prompt("Enter your name" ,"mariam");
var nameRegExp= /^[a-zA-Z]+$/;
do{
    if((nameRegExp.test(Input_name))==false)
    {
        Input_name=prompt("the Name should contain only letters ,Enter your name again" ,"mariam");
    }
    
}while((nameRegExp.test(Input_name))==false)


/*for user  phone*/
var Input_phone=prompt("Enter your phone number" ,"12797471");
var phoneRegExp= /^\d{8}$/;
do{
    if((phoneRegExp.test(Input_phone))==false)
    {
        Input_phone=prompt("the phone should contain only digits ,Enter your phone again" ,"12797471");
    }
    
}while((phoneRegExp.test(Input_phone))==false)


/*for user mobile*/
var Input_Mobile=prompt("Enter your Mobile number" ,"01112797471");

var MobileRegExp= /^(010|012|011)\d{8}$/; /*no space*/
do{
    if((MobileRegExp.test(Input_Mobile))==false)
    {
        Input_Mobile=prompt("the Mobile should contain only digits ,Enter your again" ,"01112797471");
    }
    
}while((MobileRegExp.test(Input_Mobile))==false)



/*for user email*/
var Input_Email=prompt("Enter your Email " ,"mar25@123.com");
var EmailRegExp= /^[a-zA-Z]+[0-9]*(.|-|_)?[a-zA-Z]*\@123.com$/; 
do{
    if((EmailRegExp.test(Input_Email))==false)
    {
        Input_Email=prompt("the Email should contain letters or digits ,Enter  your Email again" ,"mar25@123.com");
    }
    
}while((EmailRegExp.test(Input_Email))==false)


/*display */
var DisplayColor=prompt("enter the color to display the data with it"," 'g' for green ,'r' for red ,'b' for blue" )
 
switch (DisplayColor) {
    case"r":{
        console.log("%c the name is "+"%c%s","color:red","color:red",Input_name);
        console.log("%c the phone number is "+"%c%d","color:red","color:red",Input_phone);
        console.log("%c the mobile number is "+"%c%d","color:red","color:red",Input_Mobile);
        console.log("%c the email is "+"%c%s","color:red","color:red",Input_Email);
    
    }
        break;
    case"g":
    {
        console.log("%c the name is "+"%c%s","color:green","color:green",Input_name);
        console.log("%c the phone number is "+"%c%d","color:green","color:green",Input_phone);
        console.log("%c the mobile number is "+"%c%d","color:green","color:green",Input_Mobile);
        console.log("%c the email is "+"%c%s","color:green","color:green",Input_Email);  
    }
        break;
    case"b":
    {
        console.log("%c the name is "+"%c%s","color:blue","color:blue",Input_name);
        console.log("%c the phone number is "+"%c%d","color:blue","color:blue",Input_phone);
        console.log("%c the mobile number is "+"%c%d","color:blue","color:blue",Input_Mobile);
        console.log("%c the email is "+"%c%s","color:blue","color:blue",Input_Email);
    }
        break;
    default: 
    {
        console.log("%c the name is "+"%c%s","color:yellow","color:yellow",Input_name);
        console.log("%c the phone number is "+"%c%d","color:yellow","color:yellow",Input_phone);
        console.log("%c the mobile number is "+"%c%d","color:yellow","color:yellow",Input_Mobile);
        console.log("%c the email is "+"%c%s","color:yellow","color:yellow",Input_Email);
    } 
    break;
 }

 /*for color var 
 %s to print string with color
 %d to print number with color
  
 console.log("%c%s"+" is "+"%c%d"+"years old.", "color:red","Bob", "color:blue", 42)
*/

/*
 /^([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)|([a-zA-Z]+([0-9]+|(.|-|_)?)[a-zA-Z]+)|([0-9]+[a-zA-Z]+[0-9]+)\@123.com$/; 

*/ 

/* for name
^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
*/


