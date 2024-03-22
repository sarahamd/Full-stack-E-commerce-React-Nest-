function Add_N_Num(){
    var flag;
    var sum=0;

    if(arguments.length==0)
        throw "no parameter to this function"
    else{
        for (var i=0; i<arguments.length || flag==1 ;i++)
            {
                if(typeof arguments[i] != "number")
                {   
                    flag=1;
                    throw "you used datatype other than number"
                }
                else{
                    sum +=arguments[i];
                }
                
            }
        }  
        return sum;
}
 
// why it not return 2 throw at a time
Add_N_Num("string");
Add_N_Num();
