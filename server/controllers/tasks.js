console.log("inside of tasks.js");

const mongoose = require("mongoose");
const Task = mongoose.model("Task");

class TasksController {
    getAll(req, res){
        Task.find({}, function(err, tasks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "task": tasks});
            }
        });
    }

    getId(req, res){
        Task.find({_id: req.params.id}, function(err, task){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "task": task});
            }
        });
    }

    create(req, res){
        let task = new Task(req.body);
        task.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok"});
            }
        });
    }

    remove(req, res){
        Task.remove({_id: req.params.id}, function(err, tasks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "task": tasks});
            }
        })
    }

    update(req, res){
        Task.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, (err, task) => {
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "task": task});
            }
        });
    }
}

module.exports = new TasksController();
