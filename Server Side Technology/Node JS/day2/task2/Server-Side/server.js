const fs = require('fs');
const http = require('http');


var filehtml = ''; 
fs.readFile('../Client-Side/HTML/main.html','utf-8',(err,data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        filehtml = data;
    }
});
var filecss = ''; 
fs.readFile('../Client-Side/Style/Style.css','utf-8',(err,data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        filecss = data;
    }
});
var fileico = ''; 
fs.readFile('../Client-Side/Icons/favicon.ico',(err,data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        fileico = data;
    }
});

var filehtml2 = '';
fs.readFile('../Client-Side/HTML/profile.html','utf-8',(err,data)=>{
    if(err){
        console.log("7asal Error")
    }else{
        filehtml2 = data;
    }
});

var myData = ""
var newFile = filehtml2;

http
.createServer((req,res)=>{
//#region GET
    if(req.method == "GET"){
        switch(req.url){
        case '/':
        case '/main.html':
        case '/Client-Side/HTML/main.html':
            res.writeHead(200,{'content-type':"text/html"})
            res.write(filehtml);
        break;
        case '/profile.html':
        case '/Client-Side/HTML/profile.html':
            res.writeHead(200,{'content-type':"text/html"})
            res.write(filehtml2);
        break;
        case '/Style.css':
        case '/Client-Side/Style/Style.css':
        case "/Style/Style.css": //to run css code that link with html
            res.writeHead(200,{'content-type':"text/css"})
            res.write(filecss);
        break;
        case '/favicon.ico':
        case '/Client-Side/Icons/favicon.ico':
            res.writeHead(200,{'content-type':"	image/vnd.microsoft.icon"})
            res.write(fileico);
        break;

        }
        res.end();
    }
    // #endregion
    //#region POST
    else if(req.method == "POST"){
        req.on('data',(data)=>{
            newFile = filehtml2;  //profile
            myData = data.toString();
        })
        req.on("end",()=>{
        // myData ==> 'UserName=momen&UserMobile=22'
            var userName    = myData.split("&")[0].split("=")[1];
            var userMobile  = myData.split("&")[1].split("=")[1];
            var userEmail   = myData.split("&")[2].split("=")[1];
                userEmail   = userEmail.replaceAll("%40","@");
            var userAddress = myData.split("&")[3].split("=")[1];
                userAddress = userAddress.replaceAll("+"," ");
            newFile = filehtml2
                .replace('{{userName}}', userName)
                .replace('{{userMobile}}', userMobile)
                .replace('{{userEmail}}', userEmail)
                .replace('{{userAddress}}', userAddress)
            res.write(newFile); 
            res.end();
        })
        }
    else{
             res.write("PLZ Check ur URL.")
        }
    //#endregion
})
.listen(7002,()=>{console.log('http://localhost:7002')})




