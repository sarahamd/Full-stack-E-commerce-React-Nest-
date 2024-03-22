// console.log(location.search);
var QuereyString_name,QuereyString_add,QuereyString_mob,QuereyString_gen,QuereyString_email;
// QuereyString_name=console.log(location.search.substring(1).split("&")[0].split("=")[1]);
// QuereyString_email=console.log(location.search.substring(1).split("&")[1].split("=")[1]);
// QuereyString_add=console.log(location.search.substring(1).split("&")[2].split("=")[1]);
// QuereyString_mob=console.log(location.search.substring(1).split("&")[3].split("=")[1]);
// QuereyString_gen=console.log(location.search.substring(1).split("&")[4].split("=")[1]);

/*getting querey string from href */
QuereyString_name=location.search.substring(1).split("&")[0].split("=")[1];
QuereyString_email=location.search.substring(1).split("&")[1].split("=")[1];
QuereyString_add=location.search.substring(1).split("&")[2].split("=")[1];
QuereyString_mob=location.search.substring(1).split("&")[3].split("=")[1];
QuereyString_gen=location.search.substring(1).split("&")[4].split("=")[1];

/* email after replaced %40 with @*/
var Email=[];
Email=QuereyString_email.split("%40")[0]+"@"+QuereyString_email.split("%40")[1];


/*writing in html page */
document.body.innerHTML+="<h1>Wellcome "+ QuereyString_name+ "</h1>";
document.body.innerHTML+="<p><b>UserEmail : </b>"+ Email +"</p>";
document.body.innerHTML+="<p><b>UserAddress : </b>"+ QuereyString_add +"</p>";
document.body.innerHTML+="<p><b>UserMobile : </b>"+ QuereyString_mob +"</p>";
document.body.innerHTML+="<p><b>UserGender : </b>"+ QuereyString_gen +"</p>";


/*to know if user use chrome or not */
if (navigator.userAgent.indexOf("Chrome") !== -1) {
    console.log("User is using Chrome");
} else {
    console.log("User is not using Chrome");
}


console.log(document.forms[0]);


// document.title="WELLCOME PAGE";
// console.log(document.title);