function update(){
    
    var redVal= document.querySelectorAll('input[type="range"]')[0].value;
    var greenVal= document.querySelectorAll('input[type="range"]')[1].value;
    var blueVal= document.querySelectorAll('input[type="range"]')[2].value;
    document.getElementsByTagName("p")[0].style.color = "rgb(" + redVal + ", " + greenVal + ", " + blueVal + ")";

}