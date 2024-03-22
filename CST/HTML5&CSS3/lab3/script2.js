var myCanvas = document.getElementById("canvas1");
var context= myCanvas.getContext("2d");



//big circle
var grd2 = context.createRadialGradient(300,300,200,300,300,300)
grd2.addColorStop(1,"rgb(9, 9, 122)")
grd2.addColorStop(0,"white")
context.fillStyle=grd2;
context.beginPath();
context.arc(300, 300, 250, 0, 2 * Math.PI);
context.fill();
context.closePath();

//small circle
var grd1 = context.createRadialGradient(300,300,150,300,300,250)
grd1.addColorStop(0,"rgb(9, 9, 122)")
grd1.addColorStop(1,"white")
context.fillStyle=grd1;
context.beginPath();
context.arc(300, 300, 200, 0, 2 * Math.PI);
context.fill();
context.closePath();


//N
context.beginPath()
context.moveTo(250,400)
context.lineTo(250,150)
context.lineTo(350,400)
context.lineTo(350,150)
context.lineWidth = 18

// Set opacity for the stroke
context.globalAlpha = 1; // Adjust the value as needed (0.0 to 1.0)
context.strokeStyle = 'white';
context.stroke();


