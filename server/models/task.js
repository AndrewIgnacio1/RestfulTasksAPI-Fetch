console.log("inside of task.js");

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Name is required"]},
    description: {type: String, default: "default description"},
    completed: {type: Boolean, default: false},
},{timestamps:true});

mongoose.model('Task', TaskSchema);
