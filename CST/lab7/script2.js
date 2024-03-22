var imgLen=5;
var timer_id;
var i=0;
function animation(){
   
     /*work from 2 for first itration but agter that it run right*/
    
    timer_id= setInterval( function (){
    //     if(i==0)
    //     {
    //         document.images[i].src="img/marbels/marble3.jpg";
    //         i++;
    //     }
    //    else
     if(i<imgLen){
            document.images[i].src="img/marbels/marble1.jpg";
            i++;
            document.images[i].src="img/marbels/marble3.jpg";  
          }
        else{
                i=0;
            document.images[i].src="img/marbels/marble3.jpg";  
            } 
        }, 1000);
          // document.images[i].src="img/marbels/marble1.jpg";





//     // timer_id= setInterval( function (){
//     // if(i==0)
//     // {
//     //     document.images[i].src="img/marbels/marble3.jpg"; 
//     //     i++; 
//     // }
//     // else if(i<imgLen){
//     //             document.images[i].src="img/marbels/marble3.jpg";
//     //             document.images[i-1].src="img/marbels/marble3.jpg"; 
//     //             i++;
                 
//     //           }
//     //         else{
//     //                 i=0;
//     //             document.images[i].src="img/marbels/marble3.jpg";  
//     //             } 
//     //         }, 1000);
//     //           document.images[i].src="img/marbels/marble1.jpg";

    }

animation();

function Stopmove(){
 clearInterval(timer_id);
}
// /* work false */
// function cont(){
//     timer_id=setInterval(animation,1000);
// }



 /* not also work ture */
// Variables to track marbles and animation
// let marbles = document.querySelectorAll('img');
// let currentIndex = 0;
// let isAnimationRunning = true;

// // Function to move the marble to the next location
// function moveMarble() {
//     if (isAnimationRunning) {
//         // Move to the next marble
//         currentIndex = (currentIndex + 1) % marbles.length;

//         // Animate the current marble
//         marbles[currentIndex].src = 'img/marbels/marble3.jpg';

//         // Reset previous marble after animation completes
//         setTimeout(() => {
//             marbles[currentIndex].src = 'img/marbels/marble1.jpg';
//         }, 500);
//     }
// }

// // Set interval to move marble every second
// let intervalId = setInterval(moveMarble, 1000);

// // Pause animation when hovering over a marble
// marbles.forEach((marble, index) => {
//     marble.addEventListener('mouseover', () => {
//         clearInterval(intervalId); // Stop the interval
//         isAnimationRunning = false;
//     });

//     marble.addEventListener('mouseout', () => {
//         isAnimationRunning = true;
//         intervalId = setInterval(moveMarble, 1000); // Restart the interval
//     });
// });