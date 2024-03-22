var win;
var x = 100;
var y = 100;
var myscreenx=700;
var myscreeny=650;
var screen_element;

function OpenWindow(){
     win = window.open("win.html", "","width=200,height=100");
     screen_element=setInterval(function (){
          win.moveBy(x,y);
          // console.log("x = "+win.screenX);   
          // console.log("y = "+win.screenY);  
          if(win.screenX==myscreenx || win.screenX==0 ) {
               x=x*-1;
               y=y*-1;
          }        
     }, 500);
     win.focus();     
}

function StopMovement(){
     clearInterval(screen_element); 
     win.focus();
}
