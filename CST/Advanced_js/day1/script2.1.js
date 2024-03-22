//way 1
function ReversedCollec1()
{
    var numbers_func=[].reverse.bind(arguments);
    console.log(numbers_func());
}
ReversedCollec1(1,2,3,5);

//way 2
function ReversedCollec2()
{
    var numbers=[].reverse.apply(arguments);
    console.log(numbers);
}
ReversedCollec2(1,2,3,5);


























// function ReversedCollec()
// { var collection=[];
//     for (var i=0; i<arguments.length;i++)
//     {
//         collection[arguments.length-i]=arguments[i];
//     }
//     return collection;
// }


// function ReversedCollec()
// { var collection=[];
//     var i=0;
//     if(i<arguments.length){
//         var time_id=setInterval(
//             function()
//             {
//                 //collection.push(arguments[0]);
//                 collection[arguments.length-i]=arguments[i];
//                 i++;
//             },
//             500
//         )
//     }
//     else{
//         clearInterval(time_id);
//     }
//     return collection;
// }


