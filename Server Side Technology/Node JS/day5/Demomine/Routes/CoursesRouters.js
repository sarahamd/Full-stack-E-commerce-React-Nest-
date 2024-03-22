const express = require("express");
const router = new express.Router();

//Courses Controller
const CrsCont = require("../Controllers/CoursesController");   //{GetAllCourses,UpdateCourseByID,GetCourseByID,DeleteCourseByID,AddNewCourse};


//Get All Courses
router.get("/",CrsCont.GetAllCourses);
//Get Course By ID
router.get("/:id",CrsCont.GetCourseByID)
//Update Course By ID
router.put("/:id",CrsCont.UpdateCourseByID)
//Delete Course By ID
router.delete("/:id",CrsCont.DeleteCourseByID)
//Add New Course
router.post("/",CrsCont.AddNewCourse)

module.exports = router;