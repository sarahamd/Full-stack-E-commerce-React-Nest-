
//build html element
var heading = document.createElement("h1");
heading.innerHTML = "Generate Get Well Soon Card";
document.body.appendChild(heading);

var div1 = document.createElement("div");
document.body.appendChild(div1);

var data= { img1:"CardMaker/gws.jpg",
            img2:"CardMaker/gws2.jpg",
            img3:"CardMaker/gws3.jpg",
            img4:"CardMaker/gwsf.jpg", 
            img5:"CardMaker/gwsf2.jpg",
            img6:"CardMaker/gwsf3.jpg" };

for (var key in data) {
    var img = document.createElement("img");
    img.src = data[key];  
    img.width="100";

    var label = document.createElement("label");
    label.htmlFor = key;   //new not label.for = key;
    label.appendChild(img); //put img inside label
   

    var input = document.createElement("input");
    input.type = "radio";
    input.id = key;
    input.name = "img";
    input.value = key;
    
  
    document.body.getElementsByTagName("div")[0].appendChild(label);
    document.body.getElementsByTagName("div")[0].appendChild(input);

}
var div2 = document.createElement("div");
document.body.appendChild(div2);

var label_txtarea = document.createElement("label");
label_txtarea.htmlFor= "txtarea1";
label_txtarea.innerHTML = "Personal Message ";
document.body.getElementsByTagName("div")[1].appendChild(label_txtarea);

var txtarea=document.createElement("textarea");
txtarea.rows = "6";
txtarea.cols = "40";
txtarea.id = "txtarea1";
document.body.getElementsByTagName("div")[1].appendChild(txtarea);


var btn = document.createElement("button");
btn.id= "btn1";
btn.innerHTML = "generate";
document.body.appendChild(btn);


//send data from page1 to cookie
// document.getElementById("btn1").onclick(generate());
document.getElementById("btn1").addEventListener("click",function () {
        var txt= document.getElementById('txtarea1').value;
        console.log(txt);
     
    
      var selectedradio=document.querySelector('input[name="img"]:checked');
      if (selectedradio ) {
        var  selectedvalue= selectedradio.value;
        console.log(selectedvalue);
      } else 
      {
          console.log("no img selected");
      }
    
     
      // Set cookies with the user's information
      setCookie('TextArea', txt);
      setCookie('SelectedImg', selectedvalue);
    
    
      console.log("Cookies set successfully!");

      console.log(selectedradio);
      location.assign('task2(page2).html');
    
    });


    