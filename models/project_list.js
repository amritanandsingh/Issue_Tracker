const mongoose = require("mongoose");

const project_Schema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        unique: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required : true
    }

}, {
    timestamps: true
});

const projectModel = mongoose.model("project",project_Schema);
module.exports=projectModel;