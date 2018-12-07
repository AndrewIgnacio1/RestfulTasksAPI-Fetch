console.log("inside of task.js");

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: "default description"},
    completed: {type: Boolean, default: false},
},{timestamps:true});

mongoose.model('Task', TaskSchema);