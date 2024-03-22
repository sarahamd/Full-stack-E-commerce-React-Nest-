//task1
use tx
db.instructors.insertOne({_id:1,age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]});
                
let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
		];
		
db.instructors.insertMany(instructorsArray)
db.instructors.find();
db.instructors.find({},{firstName:1, lastName:1 ,address:1});
db.instructors.find({age:21},{firstName:1 ,"address.city":1});
db.instructors.find({"address.city":"mansoura"},{firstName:1 ,age:1});
db.instructors.find({firstName:"mona"},{lastName:"omar"},
                         {firstName:1,lastName:1});
db.instructors.find({courses:"mvc"},{firstName:1,courses:1}); 

//task2
db.instructors.find();
db.instructors.find({salary:{$gt:4000}},{firstName:1,salary:1,_id:0});
db.instructors.find({age:{$gte:25}}); // all input age=21 so will return nothing 
db.instructors.find({$and:[{"address.city":"mansoura"},{"address.street":{$in:[10,14]}}]}
                            ,{firstName:1,salary:1,address:1,_id:0}); 
db.instructors.find({$and:[{courses:"js"},{courses:"jquery"}]});   //nothing                           
db.instructors.find({firstName:{$exists:true}}).forEach((instructor)=>{
    print(`${instructor.firstName},${instructor.courses.length}`)  // as my insert element was without firstname
});


//Sort=1 ascending.
//Sort=-1 descending.
//db.instructors.aggregate(
//   [
//     { $sort : { firstName : 1, lastName: -1 } }
//   ]
//)

//g
var  Data=[];
db.instructors.find({firstName:{$exists:true}})
.sort({firstName : 1, lastName: -1})
.forEach((ins)=>{
     print(`FullName : ${ins.firstName} ${ins.lastName} , Age: ${ins.age}`);  
    var item={
        FullName : `${ins.firstName} ${ins.lastName}`,
        Age: `${ins.age}`
    }
   Data.push(item);
   
   })
printjson(Data);

//bonus
db.instructorsData.insertMany(Data)
db.instructorsData.find()
//show collections


//h
db.instructorsData.find({ "FullName": /mohammed/i });


db.instructors.deleteOne({$and:[{firstName:"ebtesam"},{courses: { $size: 5 }}]})
db.instructors.find()

db.instructors.updateMany({},{$set:{active:true}})
db.instructors.find()      


db.instructors.updateOne({firstName:"mazen",lastName:"mohammed",courses:"EF"},{$set:{"courses.$":"jquery"}})  
db.instructors.find()  

db.instructors.updateOne({firstName:"noha",lastName:"hesham"},{$push:{courses:"jquery"}})  
db.instructors.find()   


db.instructors.updateOne({firstName:"ahmed",lastName:"mohammed"},{$unset:{courses:""}})  
db.instructors.find() 


db.instructors.updateMany({courses:{$size:3}},{ $inc: {salary: -500}})  
db.instructors.find() 

////////////////////////////////question?
//db.instructors.updateMany({},{ $set: {address: "fulladdress"}})  
//db.instructors.find() 
                           
db.instructors.updateMany({},{ $rename: {address: "fulladdress"}})  
db.instructors.find()                               

db.instructors.updateOne({firstName:"noha",lastName:"hesham"},{ $set: {"fulladdress.street": 20}})  
db.instructors.find()    
