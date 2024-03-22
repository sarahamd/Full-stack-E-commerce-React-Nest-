 var myCanvas = document.getElementById("canvas1");
 var context= myCanvas.getContext("2d");


//upper side
var grd1 = context.createLinearGradient(0,0,0,200)
grd1.addColorStop(0,"rgb(10, 199, 237)")
grd1.addColorStop(0.3,"rgb(31, 225, 231)")
grd1.addColorStop(1,'white')
context.fillStyle=grd1
context.fillRect(0,0,600,300)

//strocked side
context.beginPath()
context.moveTo(200,400)
context.lineTo(200,200)
context.lineTo(400,200)
context.lineTo(400,400)
context.lineWidth = 5

// Set opacity for the stroke
context.globalAlpha = 1; // Adjust the value as needed (0.0 to 1.0)
context.strokeStyle = 'black';
context.stroke();
// Reset global alpha to its default value (1.0) if needed for other drawings
context.globalAlpha = 0.7;


//bottom side
var grd2 = context.createLinearGradient(0,300,0,550)
grd2.addColorStop(0,"rgb(1, 210, 20)")
grd2.addColorStop(0.2,"lawngreen")
grd2.addColorStop(1,'white')
context.fillStyle=grd2
context.fillRect(0,300,600,600)


