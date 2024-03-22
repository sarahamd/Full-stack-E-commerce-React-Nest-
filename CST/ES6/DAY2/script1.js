function fun(input){
     var defaultObj ={
        courseDauration:1,
        courseName:"ES6",
        courseOwner:"momen"
     };
     
     var result = {};
     result = Object.assign({},defaultObj,input);
     var allKeys = Object.keys(input);
     for(var i=0; i<allKeys.length ;i++)
     {
       if(allKeys[i]!="courseDauration" &&allKeys[i]!="courseOwner"&&allKeys[i]!="courseName")
           { throw "Error , another property is added"}
        // else{
        //     console.log(allKeys[i]);
        // }
     }
    //  console.log(allKeys);
     return `${result.courseDauration},${result.courseName},${result.courseOwner}`
    }
 console.log(fun({courseDauration:10, courseName:"js",courseOwner:"ahmed"}))//
 console.log(fun({courseDauration:10, courseName:"js"}))// 
 console.log(fun({courseDauration:10, courseName:"js" ,coOwn:"momen"}))//

