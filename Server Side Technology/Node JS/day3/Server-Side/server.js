const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 7006;
const fs = require('fs');
var filehtml2="";

//Built-In [body-Parser]
app.use(bodyParser.urlencoded({extended:true}));



//#region GET

//handel main.html req
app.get("/",(req,res)=>{ //localhost:7006
    res.sendFile(path.join(__dirname,"../Client-Side/HTML/main.html"));
   //  console.log(__dirname) //C:\Users\EGYPT\Desktop\FullStack_Mearn\labs\week8\day3\Server-Side
   });
app.get("/main.html",(req,res)=>{
    console.log("ana get main html")
    res.sendFile(path.join(__dirname,"../Client-Side/HTML/main.html"));
})
app.get("/Client-Side/HTML/main.html",(req,res)=>{
 res.sendFile(path.join(__dirname,"../Client-Side/HTML/main.html"));
})


//handel profile.html req
app.get("/profile.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/HTML/profile.html"));
     })
app.get("/Client-Side/HTML/profile.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/HTML/profile.html"));
     })

//handel Style.css req
app.get("/Style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/Style/Style.css"));
   })
app.get("/Client-Side/Style/Style.css",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Client-Side/Style/Style.css"));
   })
app.get("/Style/Style.css",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Client-Side/Style/Style.css"));
   })

//handel Style_Profile.css req
app.get("/Style/Style_Profile.css",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Client-Side/Style/Style_Profile.css"));
   })
app.get("/Style_Profile.css",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Client-Side/Style/Style_Profile.css"));
   })
app.get("/Client-Side/Style/Style_Profile.css",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Client-Side/Style/Style_Profile.css"));
   })

//handel favicon.ico req
app.get("/favicon.ico",(req,res)=>{
  res.sendFile(path.join(__dirname,"../Client-Side/Icons/favicon.ico"));
   })
app.get("/Client-Side/Icons/favicon.ico",(req,res)=>{
  res.sendFile(path.join(__dirname,"../Client-Side/Icons/favicon.ico"));
   })

// handel req out of the above requests like: http://localhost:7006/kd;lds
app.get("*",(req,res)=>{
   res.send("page not found"); 
  })  

//#endregion


var filehtml2 = '';
fs.readFile('../Client-Side/HTML/profile.html','utf-8',(err,data)=>{
    if(err){
    console.log("7asal Error")
    }else{
    filehtml2 = data;
    }
});

var newFile='';
// middleware to inlialize newfile with filehtml2 each req of method post berfore handling req
app.post(["/","/main.html"],(req,res,next)=>{
   newFile = filehtml2;
   console.log("Ana MiddleWare");
   //code
   next();
})

//#region POST
// var newFile = filehtml2;
app.post(["/","/main.html"], (req, res) => { 
    var userName = req.body.UserName;
    var userMobile = req.body.UserMobile;
    var userEmail = req.body.UserEmail;
    var userAddress = req.body.UserAddress;
        
    newFile = filehtml2
        .replace('{{userName}}', userName)
        .replace('{{userMobile}}', userMobile)
        .replace('{{userEmail}}', userEmail)
        .replace('{{userAddress}}', userAddress)
        console.log("req.body",req.body)
        // console.log("req.body.UserName",req.body.UserName)
        // console.log("req.body.userMobile",req.body.UserMobile)
        // console.log("req.body.userEmail",req.body.userEmail)
            res.send(newFile); 
})

app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})
//#endregion 






