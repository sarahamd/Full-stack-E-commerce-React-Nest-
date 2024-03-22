// const http = require("http");
// http.createServer(
//             (req,res)=>{
//                 if(req.url != '/favicon.ico'){
//                    // console.log(req.url);
//                     var req_url=req.url;
//                     var arr=req_url.split("/");
//                     var operation=arr[1];
//                     var operatant1=arr[2];
//                     var operatant2=arr[3];
               
//                     if(operation == "add")
//                     {
//                         for (let index = 2; index < arr.length; index++){
//                         var result=parseFloat(operatant1)+parseFloat(operatant2);}
//                         operation="+";
//                     }
//                     else if(operation == "sub")
//                     { for (let index = 2; index < arr.length; index++){
//                         var result=parseFloat(operatant1)-parseFloat(operatant2);}
//                         operation="-";
//                     }
//                     else if(operation == "mul")
//                     { for (let index = 2; index < arr.length; index++){
//                         var result=parseFloat(operatant1)*parseFloat(operatant2);}
//                         operation="*";
//                     }
//                     else
//                     {
//                         for (let index = 2; index < arr.length; index++){
//                         var result=parseFloat(operatant1)/parseFloat(operatant2);}
//                         operation="/";
//                     }

//                     console.log(result);
                
//                     res.writeHead(201,{'content-type':'text/html'})
//                     res.write(`<h1>${operatant1} ${operation} ${operatant2} = ${result}</h1>`);


//                 }
//                 res.end();
//             }
//     ).listen(7000,()=>{

//         console.log("http://localhost:7000/")
//     })



// // var mariam = http.createServer((req,res)=>{})//.listen('8000',()=>{})
// // mariam.listen()



//bouns
const http = require("http");
http.createServer(
            (req,res)=>{
                if(req.url != '/favicon.ico'){
                   // console.log(req.url);
                   var result=0;                    var req_url=req.url;
                    var arr=req_url.split("/");
                    var operation=arr[1];
                    var operatant1=arr[2];
                    var operatant2=arr[3];
               
                    if(operation == "add")
                    {
                        for (let index = 2; index < arr.length; index++){
                        // var result=parseFloat(operatant1)+parseFloat(operatant2);
                        result+=parseFloat(arr[index])}
                        // operation="+";
                    }
                    else if(operation == "sub")
                    { for (let index = 2; index < arr.length; index++){
                        // var result=parseFloat(operatant1)-parseFloat(operatant2);
                        result-=parseFloat(arr[index])
                    }
                        // operation="-";
                    }
                    else if(operation == "mul"){
                    { 
                        for (let index = 2; index < arr.length; index++){
                        // var result=parseFloat(operatant1)*parseFloat(operatant2);
                        result*=parseFloat(arr[index])}
                    }
                        // operation="*";
                    }
                    else
                    {
                        for (let index = 2; index < arr.length; index++){
                        // var result=parseFloat(operatant1)/parseFloat(operatant2);
                        result/=parseFloat(arr[index])
                    }
                        // operation="/";
                    }

                    console.log(result);
                
                    res.writeHead(201,{'content-type':'text/html'})
                    // res.write(`<h1>${operatant1} ${operation} ${operatant2} = ${result}</h1>`);
                    res.write(`<h1>${result}</h1>`);


                }
                res.end();
            }
    ).listen(7000,()=>{

        console.log("http://localhost:7000/")
    })



// var mariam = http.createServer((req,res)=>{})//.listen('8000',()=>{})
// mariam.listen()




