//[Model]Data
const CoursesModel = require("../Models/CoursesModel");
const CRSMODEL = new CoursesModel();

const GetAllCourses = (req,res)=>{
    var AllCourses = CoursesModel.GetCourses();
    res.json(AllCourses);
}

const GetCourseByID = (req,res)=>{
    var foundCourse = CRSMODEL.GetCourseByID(req.params.id);
    res.json(foundCourse);
}

const UpdateCourseByID = (req,res)=>{
    var response = CRSMODEL.UpdateCourseByID(req.params.id,req.body);
    res.json(response);
}


const DeleteCourseByID = (req,res)=>{
    var remainderCourses = CRSMODEL.DeleteCourseByID(req.params.id);
    res.json({message:"Deleted Sucessfully",Data:remainderCourses});
}

const AddNewCourse = (req,res)=>{
    var response = CRSMODEL.Save(req.body);
    res.json(response);
}


module.exports = {
    GetAllCourses,
    UpdateCourseByID,
    GetCourseByID,
    DeleteCourseByID,
    AddNewCourse
};