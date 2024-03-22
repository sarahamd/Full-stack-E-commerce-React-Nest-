const StudentValid = require("../Utils/StudentsValid");
const path = require("path");
var fs=require("fs");

class StudentModel{
    // static Students = [];
    static Students = JSON.parse(fs.readFileSync(path.join(__dirname,"../Data/students.json")));
    stdID =  3; // as i already have 3 course
    static GetStudents(){
        // console.log("this",this);  //StudentModel
        // return StudentModel.Students;
         return this.Students;  //if Students not a static propetry so this.Students will return undefiend as not been in class itself
    }
    GetStudentByID(id){
        var ID = id;
        var foundStudent = StudentModel.Students.find(std=>std.id==ID)||{};
        return foundStudent;
    }
    UpdateStudentByID(id,body){
        var ID = id;
        var newStudent = body;
        if(StudentValid(newStudent)){
            newStudent.id = ID;
            for(let i=0; i<StudentModel.Students.length;i++){
                if(StudentModel.Students[i].id == ID){
                    StudentModel.Students[i] = newStudent;
                }
            }
             //fs.writeFileSync(path.join(__dirname,'../Data/students.json'),JSON.stringify(StudentModel.Students)); // to overwrite new data to file
            return {message:"Updated Sucessfully", Data:newStudent};
        }else{
            return {message:"Not Valid"}
        }
    }
    DeleteStudentByID(id){
        var ID = id;
        StudentModel.Students = StudentModel.Students.filter(std=>std.id!=ID);
        //fs.writeFileSync(path.join(__dirname,'../Data/students.json'),JSON.stringify(StudentModel.Students)); // to overwrite new data to file
        return  StudentModel.Students;
    }
    // Save(){
    Save(body){
        var newStudent = body;
        if(StudentValid(newStudent)){
            this.stdID++;
            newStudent.id = this.stdID;
            StudentModel.Students.push(newStudent);
          //fs.writeFileSync(path.join(__dirname,'../Data/students.json'),JSON.stringify(StudentModel.Students)); // to overwrite new data to file      
            return {message:"Added Succesfully",data:StudentModel.Students}
        }else{
            return {message:"Not Valid"}
        }
    }
}


module.exports = StudentModel;