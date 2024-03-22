var InputString=prompt("Enter a String" ,"a string");
var char=prompt("Enter the char you want to search for it" ,"a char");
var LetterCase=confirm("you want to apply case senstivity or not ?!");

var stringLength;
stringLength=InputString.length;

var i;
var counter=0;
/* case senstivity */

if(LetterCase==true)
{
    for(i=0;i<stringLength;i++)
    {
        if(InputString.charAt(i)==char)
        {
            counter+=1;
        }
    }
}
else if(LetterCase==false){ /*no case senstivity */

    for(i=0;i<stringLength;i++)
    {
        if(InputString[i].toLowerCase() == char || InputString[i].toUpperCase() == char)
        {
            counter+=1;
        }
    }

}
console.log(" the counts of the char inside the string is " + counter);


addings (1,2);
var y=10;
function addings(a,b){
    console.log(y);
}