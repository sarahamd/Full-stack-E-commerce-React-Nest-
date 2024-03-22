//[Model]Data
const StudnetsModel = require("../Models/StudentsModel");
const STDMODEL = new StudnetsModel();

const GetAllStudents = (req,res)=>{
    var AllStudents = StudnetsModel.GetStudents();
    res.json(AllStudents);
}

const GetStudentByID = (req,res)=>{
    var foundStudent = STDMODEL.GetStudentByID(req.params.id);
    res.json(foundStudent);
}

const UpdateStudentByID = (req,res)=>{
    var response = STDMODEL.UpdateStudentByID(req.params.id,req.body);
    res.json(response);
}

const DeleteStudentByID = (req,res)=>{
    var remainderStudents = STDMODEL.DeleteStudentByID(req.params.id);
    res.json({message:"Deleted Sucessfully",Data:remainderStudents});
}

const AddNewStudent = (req,res)=>{
    var response = STDMODEL.Save(req.body);
    res.json(response);
}


module.exports = {
    GetAllStudents,
    UpdateStudentByID,
    GetStudentByID,
    DeleteStudentByID,
    AddNewStudent
};