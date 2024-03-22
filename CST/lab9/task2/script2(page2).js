
//get data from cookie and display it in page2
var text= getCookie('TextArea');
var value= getCookie('SelectedImg');


// console.log(text);
// console.log(value);

var image=document.createElement("img");
image.width="500";
if(value== "img1")
{
    image.src="CardMaker/gws.jpg";
    document.body.appendChild(image);
}
else if(value== "img2"){
    image.src="CardMaker/gws2.jpg";
    document.body.appendChild(image);
}
else if(value== "img3"){
    image.src="CardMaker/gws3.jpg";
    document.body.appendChild(image);
}
else if(value== "img4"){
    image.src="CardMaker/gwsf.jpg";
    document.body.appendChild(image);
}
else if(value== "img5"){
    image.src="CardMaker/gwsf2.jpg";
    document.body.appendChild(image);
}
else if(value== "img6"){
    image.src="CardMaker/gwsf3.jpg";
    document.body.appendChild(image);
}



 document.body.innerHTML += '<br>text '+ text 

