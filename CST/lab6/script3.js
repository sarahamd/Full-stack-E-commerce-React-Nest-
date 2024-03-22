
var childwin;
function scrollwin(){
   childwin=open("task3(ScrollWin).html","","width=1000,height=500");
    
   fun();
}

  function fun(){
        window.scrollBy(0,500); 
  }

setInterval( fun,1000);





// var childwin;
// function scrollwin(){
//    childwin=open("task3(ScrollWin).html","","width=1000,height=500");
    
//    fun();
// }

//   function fun(){
//     setInterval( function (){
//         childwin.scrollBy(0,2000);    
//     },1000);
       
//   }



