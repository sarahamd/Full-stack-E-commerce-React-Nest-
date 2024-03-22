const Ajv = require("ajv");
const ajv = new Ajv();

//Schema
const StudentSchema = {
    type:"object",
    properties:{
        name:{type:"string",pattern:"^[a-zA-Z]{3,}$"},
        dept:{type:"string",enum:["SD","OS","ES"],minLength:2,maxLength:2},
        CourseID:{type:"array" , items: {type: "integer"}}
    },
    required:['name', 'CourseID','dept'],
    additionalProperties:false
};

module.exports = ajv.compile(StudentSchema);//StudentValid(data)==>[true-false]
