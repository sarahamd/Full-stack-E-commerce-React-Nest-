
$(document).ready(function(){


// var button1 = $('<input/>').attr({ type: 'button', id:'btn1', value:'Run' });
// $("body").append(button1);

// var button2 = $('<input/>').attr({ type: 'button', id:'btn2', value:'Return' });
// $("body").append(button2);


$("body").append('<button id="btn1">Run </button>'); 
$("body").append('<button id="btn2">Return </button>'); 

$("body").append('<div id="div1">Hello!! </div>'); 

//default style for div
$("#div1").css({"background-color":"red","color":"white",
                "width":"200px","height":"20px","font-size":"15px",
                "padding-left":"2px","position": "absolute","left":"10px"});

// style for div when click run
$("#btn1").on('click',function(){
    $("#div1").css({"background-color":"pink","color":"white",
                    "width":"500px","height":"50px",
                    "position": "absolute","left":"50px","font-size":"40px"});
})


// style for div when click return
$("#btn2").on('click',function(){
    $("#div1").css({"background-color":"red","color":"white","width":"200px",
                    "height":"20px","padding-left":"2px",   
                    "position": "absolute","left":"10px","font-size":"15px"})

  
})



})

