const Ajv = require("ajv");
const ajv = new Ajv();

//Schema
const CourseSchema = {
    type:"object",
    properties:{
        name:{type:"string",pattern:"^[a-zA-Z]{3,}$"},
        totalDegree:{type:"integer",minimum:40, maximum:100},
    },
    required:['name', 'totalDegree'],
    additionalProperties:false
};

module.exports = ajv.compile(CourseSchema);//CourseValid(data)==>[true-false]
