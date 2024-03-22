
document.write("<h1>Heading</h1> <hr>" )
var message=prompt("Enter a message", "hello everyone");
var i;
for(i=1;i<7;i++)
{
    document.write("<h"+i+">"+ message +i);
}