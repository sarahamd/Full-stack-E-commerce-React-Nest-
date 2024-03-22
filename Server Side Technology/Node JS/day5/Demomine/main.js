/**
 * npm i express
 * npm i mongoose
 * npm i body-parser
 * npm i ajv
 */

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7008;

//#region MW 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//#endregion

//#region Routes [Rest API - Restfull API] [End Points]

    //#region Students[/api/students]
        const StudentsRouter = require("./Routes/StudentsRoutes");
        app.use("/api/students",StudentsRouter)
    //#endregion
    //#region Courses[/api/students]
        const CoursesRouter = require("./Routes/CoursesRouters");
        app.use("/api/Courses",CoursesRouter);
    //#endregion
    
//#endregion
app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})