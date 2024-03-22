use FacultySystemV2
let StudentArray=[
            {   _id:1,
                firstName:"mariam",
                lastName:"momen",
                facultyId:1,
                isFired:false,
                StdCourse:[{courseId:1 , grade:106},{courseId:2 , grade:406},{courseId:3 , grade:460}]
                ,CoursesIDs:[3,2,1],
                faculty_Id:1
            },
            {   _id:2,
                firstName:"omar",
                lastName:"sayed",
                facultyId:2,
                isFired:false,
                StdCourse:[{courseId:1 , grade:76},
                            {courseId:2 , grade:56},
                            {courseId:3 , grade:206}],
                faculty_Id:3,
                CoursesIDs:[1,3,2]
            },
            {   _id:3,
                firstName:"aya",
                lastName:"ahmed",
                facultyId:3,
                isFired:false,
                StdCourse:[{courseId:1 , grade:86},{courseId:2 , grade:96},{courseId:3 , grade:36}],
               faculty_Id:3,
               CoursesIDs:[2,3,1] 
           }
       ];
let FacultyArray=[
            {
                _id:1,
                facultyName:"cairo uni",
                Address:"cairo"  
            },
            {
                _id:2,
                facultyName:"alex uni",
                Address:"alex"  
            },
            {
                _id:3,
                facultyName:"mansoura uni",
                Address:"mansoura"  
            }
          
       ];

let CourseArray=[
            {
                _id:1,
                CousrseName:"js",
                FinalMark:60  
            },
            {
               _id:2,
               CousrseName:"db",
               FinalMark:120
            },
            {
                _id:3,
                CousrseName:"css",
                FinalMark:100 
            }
          
       ];
                      
db.students.insertMany(StudentArray)
db.students.find()
db.faculty.insertMany(FacultyArray)
db.faculty.find()
db.course.insertMany(CourseArray)
db.course.find()

//2
db.students.aggregate([
{$project:
    {fullName:{$concat:[`$firstName`," ",`$lastName`]},
     AVG:{$avg:"$StdCourse.grade"},
     _id:0}}
])

//3
db.course.aggregate([
{$group:
    {SumFinalMarkS:{$sum:"$FinalMark"}
     ,_id:0}}
])

//4.1
db.students.aggregate([
{
  $match:{ lastName:"momen"}  
},
{
    $lookup:{
        from:"course",
        localField:"CoursesIDs",
        foreignField:"_id",
        as:"courseeeeeeId"
    }
},{
    $project:{lastName:1,firstName:1,courseeeeeeId:1}
}
])

//4.2
db.students.aggregate([
{
  $match:{ lastName:"momen"}  
},
{
    $lookup:{
        from:"faculty",
        localField:"faculty_Id",
        foreignField:"_id",
        as:"facultyyyyyyyId"
    }
},{
    $project:{lastName:1,firstName:1,facultyyyyyyyId:1},
      //$project:{lastName:1,firstName:1,"facultyyyyyyyId.facultyName":1}
}
])
      
