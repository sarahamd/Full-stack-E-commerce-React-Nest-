
document.getElementById("txt1").addEventListener("keydown",function (event)
{
    if(event.altKey) // i sent event to handle spacific object in that event 
    {
        alert("altkey is pressed");

    }
    else if(event.shiftKey)
    {
        alert("shiftkey is pressed");

    }
    else if(event.ctrlKey)
    {
        alert("ctrlkey is pressed");

    }
    else
    {
        alert("Ascii code of "+ "'"+ event.key +"'" +" is "+ event.keyCode);
    }
})
//  way2
// document.getElementById("txt1").onkeydown=function (event)
// {
//     if(event.altKey) // i sent event to handle spacific object in that event
//     {
//         alert("altkey is pressed");

//     }
//     else if(event.shiftKey)
//     {
//         alert("shiftkey is pressed");

//     }
//     else if(event.ctrlKey)
//     {
//         alert("ctrlkey is pressed");

//     }
//     else
//     {
//         alert("Ascii code of "+ "'"+ event.key +"'" +" is "+ event.keyCode);
//     }
// }

// <!-- way1 -->
// function ShowASCII(ev)
// {
//     if(ev.altKey)
//     {
//         alert("altkey is pressed");

//     }
//     else if(ev.shiftKey)
//     {
//         alert("shiftkey is pressed");

//     }
//     else if(ev.ctrlKey)
//     {
//         alert("ctrlkey is pressed");

//     }
//     else
//     {
//         alert("Ascii code of "+ "'"+ ev.key +"'" +" is "+ ev.keyCode);
//     }
    

// }




// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Keycode and Unicode Example</title>
// </head>
// <body>

//   <h1>Press a key to get its Keycode and Unicode</h1>

//   <script>
//     document.addEventListener('keydown', function(event) {
//       // Display key, keycode, and unicode
//       console.log('Key:', event.key);//a
//       console.log('Keycode:', event.keyCode);//65
//       console.log('which:', event.which);//65
//       console.log('code:', event.code);//keyA
//       console.log('Unicode:', event.key.charCodeAt(0));//97
//     });
//   </script>

// </body>
// </html>

