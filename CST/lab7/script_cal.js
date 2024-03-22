var number;
var operator;
var reset;
var PreResult;
var operator_Val;

function EnterNumber(num){
    number =document.getElementById("ans");
    number.value += num;
    //console.log("number.value"+number.value);
}
function EnterOperator(optr){
    operator =document.getElementById("ans");
    operator_Val=optr;//+
    operator.value += optr;
    //console.log("operator.value"+operator.value);
    //console.log("operator_Val"+operator_Val);
}
function EnterEqual(){ 
    var PreResult=" "; 
    PreResult =document.getElementById("ans").value; //2+3
    //console.log(PreResult); //2+3
    //console.log(PreResult.split(operator_Val)); //[2,3]
    //console.log(PreResult.split(operator_Val)[0]); //2
    
    if(operator_Val=="+")
    {
        result=parseFloat(PreResult.split(operator_Val)[0])+parseFloat(PreResult.split(operator_Val)[1]);
        //setTimeout(EnterClear,1000);
    }
    else if(operator_Val=="-")
    {
        result=parseFloat(PreResult.split(operator_Val)[0])-parseFloat(PreResult.split(operator_Val)[1]);
   
    }
    else if(operator_Val=="*")
    {
        result=parseFloat(PreResult.split(operator_Val)[0])*parseFloat(PreResult.split(operator_Val)[1]);
 
    }
    else
    {
        result=parseFloat(PreResult.split(operator_Val)[0])/parseFloat(PreResult.split(operator_Val)[1]);
    }
        document.getElementById("ans").value=result;
        operator_Val=null; 
    }




function EnterClear(){
    reset =document.getElementById("ans");
    reset.value="";
}
