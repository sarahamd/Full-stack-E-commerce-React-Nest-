// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   [12, 5, 8, 130, 44].every(isBigEnough); // false
//   [12, 54, 18, 130, 44].every(isBigEnough); // true


function isString(...arr){
    return arr.every( element => typeof element === "string")
}
function isSome(arr,char){
    return arr.some((element) =>  element.startsWith(char))
}
var Filter=function (arr,char1,char2){
   return arr.filter(element => element.startsWith(char1) || element.startsWith(char2) )

}

// Filter.forEach(element => 
//     console.log(element)
// );
function ILikeStatement(fruit) {
    return `I like ${fruit}!`;
  }

var fruits=["apple","strawberry","banana","orange","mansgo"];
console.log("fruits is string? "+ isString(...fruits));
console.log("fruits is start with a ? "+ isSome(fruits,"a"));
console.log("fruits is start with a ? "+ Filter(fruits,"s","b"));

  var likeStatements = fruits.map(ILikeStatement);
  console.log("with i like statment",likeStatements);
  var all= fruits.forEach((element)=> console.log(element));

  
  