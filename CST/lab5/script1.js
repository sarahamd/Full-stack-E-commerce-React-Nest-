/*1 promot */
var arr=[];
for(var i=0;i<5;i++)
{
     arr[i] =prompt("Enter number "+ (i+1));
}


console.log(" unsorted array",arr);
console.log("sorted array",arr.sort());
console.log( "Ascending array" ,arr.sort((a,b) => a - b));
console.log( "Descending array" ,arr.sort((a,b) => b - a));

