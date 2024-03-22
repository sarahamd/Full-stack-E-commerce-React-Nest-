function OpenWindow(){    
    var i=0;
    var win;
    var time_id;
    var message="typing string"; 
    win = open("task2_NewWin.html", "","width=200,height=100");
    win.focus(); 

    // time_id=setInterval( function(){
    //     // win.document.write(message[i]);
    //     win.document.body.innerHTML+=message[i];
    //     i++;
    //     if(i== message.length){
    //         clearInterval(time_id);
    //          /*why CloseWindow or CloseWindow() not work !!!!!*/
    //         setTimeout(function (){
    //         win.close();
    //     },1500);}
    //     },500);
    //  }



    
    time_id=setInterval( function(){
        // win.document.write(message[i]);
        win.document.body.innerHTML+=message[i];
        i++;
        if(i== message.length){
            clearInterval(time_id);
             /*with CloseWindow*/
            setTimeout(CloseWindow,1500);}
        },500);
     }



     
    
function CloseWindow(){
        win.close(); 
}

  


/*why this donot work!!!!!!!!!!!!!!!!!!!!!!!!!!*/
         // for(var i;i<message.length;i++){
        //    win.document.write(message[i]);}


        