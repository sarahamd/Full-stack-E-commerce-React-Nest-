var nameval= getCookie('username');
var ageval= getCookie('userage');
var genderval= getCookie('usergender');
var colorval= getCookie('usercolor');
var times=getCookie("num_visits"); // for first time times =undefiend  "undefiend=false"
if (!times)  // for first time !false=true
setCookie("num_visits",1)
else
setCookie("num_visits",(parseInt(getCookie("num_visits")))+1)


// var i=0;
// if(!hasCookie("num_visits")){
//     i=1;
//     setCookie('num_visits',i);
// }
// else{
//     setCookie('num_visits',i++);  
// }

// var Visits= getCookie('num_visits');

// var Visits= getCookie('num_visits');

// console.log(VisitTimes);

var cookie=getAllCookies();
console.log(cookie);

// console.log(nameval);

// console.log(ageval);
// console.log(genderval);
// console.log(colorval);
// console.log(typeof(colorval));

if(genderval=="female")
{
    document.images[0].src="img/2.jpg";
}
else{
    document.images[0].src="img/1.jpg";
}
//console.log(colorval);
//var colorstyle =nameval.style.color = "red";


//document.inne("wellcom"+ nameval+ "you have visited this site");
// document.getElementsByTagName("div").innerHTML="<p>wwww</p>";
 document.getElementById('myDiv').innerHTML = 'Hello World! '+ nameval +" you have visited this site " +getCookie("num_visits")

// var myDiv = document.createElement('div');
// myDiv.id = 'myDiv';
// document.body.appendChild(myDiv);
// myDiv.innerHTML = 'Hello World! '+ nameval +" you have visited this site " +getCookie("num_visits");


