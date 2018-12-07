console.log("inside of tasks.js");

const mongoose = require("mongoose");
const Task = mongoose.model("Task");

class Tasks {
    getAll(req, res){
        Task.find({}, function(err, tasks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "name": tasks});
            }
        });
    }

    getId(req, res){
        Task.find({_id: req.params.id}, function(err, tasks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "name": tasks});
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

    destroy(req, res){
        Task.remove({_id: req.params.id}, function(err, tasks){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                res.json({"status": "ok", "name": tasks});
            }
        })
    }
}

module.exports = new Tasks();