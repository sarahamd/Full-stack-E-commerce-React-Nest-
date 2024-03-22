const express = require("express");
const router = new express.Router();

//Students Controller
const StdCont = require("../Controllers/StudentsController");   //{GetAllStudents,UpdateStudentByID,GetStudentByID,DeleteStudentByID,AddNewStudent};


//Get All Students
router.get("/",StdCont.GetAllStudents);
//Get Student By ID
router.get("/:id",StdCont.GetStudentByID)
//Update Student By ID
router.put("/:id",StdCont.UpdateStudentByID)
//Delete Student By ID
router.delete("/:id",StdCont.DeleteStudentByID)
//Add New Student
router.post("/",StdCont.AddNewStudent)

module.exports = router;