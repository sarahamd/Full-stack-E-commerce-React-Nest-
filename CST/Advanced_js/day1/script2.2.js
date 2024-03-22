function TwoNumber()
{
    if( arguments.length<2)
    {
 throw "#argument less than 2"
    }
    else if( arguments.length>2)
    {
        throw "#argument exceeds 2"
    }
    else
    {
        alert("#argument = 2");
    }
}

TwoNumber(1,2);
TwoNumber(1);
TwoNumber(1,2,3);