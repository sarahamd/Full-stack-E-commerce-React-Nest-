var InputString=prompt("Enter a String" ,"a string");
var LetterCase=confirm("you want to apply Case Senstivity or not ?!");

var stringLength;
stringLength=InputString.length;

var i;
var counter=0;

/* case senstivity */
if(LetterCase==true)
{
    for(i=0;i<stringLength;i++)
    {
        if(InputString.charAt(i)==InputString.charAt(stringLength-1-i))
        {
            counter+=1;
        }
    }
    if(counter==stringLength)
    {
        console.log("the entered string is Palindrome")
    }
    else
    {
        console.log("the entered string is NOT Palindrome")
    }
}
else if(LetterCase==false){ 
    /*no case senstivity */
    for(i=0;i<stringLength;i++)
    {
        if(InputString[i].toLowerCase() == InputString.charAt(stringLength-1-i) || InputString[i].toUpperCase() == InputString.charAt(stringLength-1-i))
        {
            counter+=1;
        }
    }
    if(counter==stringLength)
    {
        console.log("the entered string is palindrome")
    }
    else
    {
        console.log("the entered string is NOT Palindrome")
    }

}
