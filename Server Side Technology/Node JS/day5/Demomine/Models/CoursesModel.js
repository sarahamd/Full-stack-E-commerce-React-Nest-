const path = require("path");
const CourseValid = require("../Utils/CoursesVaild");
var fs=require("fs");

class CourseModel{
    // static Courses = [];
    static Courses=JSON.parse(fs.readFileSync(path.join(__dirname,"../Data/courses.json")));
    crsID = 3; // as i already have 3 course
    static GetCourses(){
        //this here refer to CourseModel as GetCourses is static method
        return this.Courses;  //if Courses not a static propetry so this.Courses will return undefiend as not been in class itself  
    }
    GetCourseByID(id){
        var ID = id;
        var foundCourse = CourseModel.Courses.find(std=>std.id==ID)||{};
        return foundCourse;
    }
    UpdateCourseByID(id,body){
        var ID = id;
        var newCourse = body;
        if(CourseValid(newCourse)){
            newCourse.id = ID;
            for(let i=0; i<CourseModel.Courses.length;i++){
                if(CourseModel.Courses[i].id == ID){
                    CourseModel.Courses[i] = newCourse;
                }
            }
            //fs.writeFileSync(path.join(__dirname,'../Data/courses.json'),JSON.stringify(CourseModel.Courses)); // to overwrite new data to file
            return {message:"Updated Sucessfully", Data:newCourse};
        }else{
            return {message:"Not Valid"}
        }
    }
    DeleteCourseByID(id){
        var ID = id;
        CourseModel.Courses = CourseModel.Courses.filter(std=>std.id!=ID);
      //  fs.writeFileSync(path.join(__dirname,'../Data/courses.json'),JSON.stringify(CourseModel.Courses)); // to overwrite new data to file
        return  CourseModel.Courses;
    }
    // Save(){
    Save(body){
        var newCourse = body;
        if(CourseValid(newCourse)){
            this.crsID++;
            newCourse.id = this.crsID;
            CourseModel.Courses.push(newCourse);
          //  fs.writeFileSync(path.join(__dirname,'../Data/courses.json'),JSON.stringify(CourseModel.Courses));  // to overwrite new data to file
            return {message:"Added Succesfully",data:CourseModel.Courses}
        }else{
            return {message:"Not Valid"}
        }
    }
}


module.exports = CourseModel;