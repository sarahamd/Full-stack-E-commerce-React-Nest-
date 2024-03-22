function LargestWord (InputString){
    var array_Input=InputString.split(" ");  /* ["mariam","ahmed,"Mariam"]*/
    
    var OLdLength=0; 
    var NewLength=0; 
    var index=0;
    var i=0;

    for(i=0;i<array_Input.length;i++){
        NewLength=array_Input[i].length;
        if(NewLength>OLdLength){
            index=i;
            OLdLength=NewLength;
        }
    }

    return array_Input[index];
}
var result;
var UserInput=prompt("enter a string" ,"mariam ahmed Mariam");
result=LargestWord(UserInput);
console.log(result);







 