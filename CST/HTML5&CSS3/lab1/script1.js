// onload = function() {
//     document.querySelector('input[id="TimeShow"]').setAttribute('value',document.getElementsByTagName("video")[0].currentTime);

//   };
// document.querySelector('input[id="TimeShow"]').setAttribute('value',document.getElementsByTagName("video")[0].currentTime);


function play(){
    document.getElementsByTagName("video")[0].play();
}
function stop(){
    document.getElementsByTagName("video")[0].pause();
   // console.log("value"+document.querySelector('input[id="TimeShow"]').value);
   // console.log("current"+document.getElementsByTagName("video")[0].currentTime);
}
function speed(){
    document.getElementsByTagName("video")[0].playbackRate= document.querySelector('input[id="speed"]').value;
}
function volume()
{
    document.getElementsByTagName("video")[0].volume= document.querySelector('input[id="volume"]').value;
}

function switchmute(){
    if(document.getElementsByTagName("video")[0].volume !=0){
        document.getElementById("switch").value="unmuted";
        document.getElementsByTagName("video")[0].volume =0;
    }
    else if(document.getElementsByTagName("video")[0].volume ==0 && document.querySelector('input[id="volume"]').value ==0){
        document.getElementById("switch").value="muted";  
    }
    else if(document.querySelector('input[id="volume"]').value !=0  && document.getElementById("switch").value=="unmuted"){
        document.getElementById("switch").value="muted";
        document.getElementsByTagName("video")[0].volume = document.querySelector('input[id="volume"]').value;
    }
    
}
// document.querySelector('input[id="TimeShow"]').setAttribute('value',document.getElementsByTagName("video")[0].currentTime);
// // console.log(document.querySelector('input[id="TimeShow"]').value)
 
function back10()
{   
    if(document.getElementsByTagName("video")[0].currentTime <10 ){
    document.getElementsByTagName("video")[0].currentTime=0;
   }
    else {
        document.getElementsByTagName("video")[0].currentTime -=10;
    }
}
 
function back5()
{   
    if(document.getElementsByTagName("video")[0].currentTime <5 ){
    document.getElementsByTagName("video")[0].currentTime=0;
   }
    else {
        document.getElementsByTagName("video")[0].currentTime -=5;
    }
}
function forward5()
{   
    if(document.getElementsByTagName("video")[0].currentTime == document.getElementsByTagName("video")[0].duration ){
    document.getElementsByTagName("video")[0].currentTime=0;
   }
    else {
        document.getElementsByTagName("video")[0].currentTime +=5;
    }
}
function forward10()
{   
    if(document.getElementsByTagName("video")[0].currentTime == document.getElementsByTagName("video")[0].duration ){
    document.getElementsByTagName("video")[0].currentTime=0;
   }
    else {
        document.getElementsByTagName("video")[0].currentTime +=10;
    }
}



document.getElementsByTagName("video")[0].ontimeupdate = function(){

    document.getElementById("TimeShow").max=document.getElementsByTagName("video")[0].duration.toFixed(2) ;
    
    document.getElementById('show').innerHTML =  
    document.getElementsByTagName("video")[0].currentTime.toFixed(2) 
    +"/"+ document.getElementsByTagName("video")[0].duration.toFixed(2) ;
    
    document.getElementById("TimeShow").value=document.getElementsByTagName("video")[0].currentTime.toFixed(2) 

};  


// Set up the ontimeupdate event handler
// onload=function(){
// document.getElementsByTagName("video")[0].ontimeupdate = function () {
//     var currentTime = document.getElementsByTagName("video")[0].currentTime;
//     var duration = document.getElementsByTagName("video")[0].duration;

//     var minutes = Math.floor(currentTime / 60);
//     var seconds = Math.floor(currentTime % 60);

//     var durationMinutes = Math.floor(duration / 60);
//     var durationSeconds = Math.floor(duration % 60);

//     var currentTimeString = minutes + ":" + (seconds < 10 ? "0" + seconds: seconds);
//     var durationTimeString = durationMinutes + ":" + (durationSeconds < 10 ? "0"+ durationSeconds:durationSeconds);

//     document.getElementById("TimeShow").max = duration.toFixed(2);
//     document.getElementById("show").innerHTML = currentTimeString + "/" + durationTimeString;
//     document.getElementById("TimeShow").value = currentTime.toFixed(2);
// };

// };

