console.log("inside of routes.js");

const Tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get("/tasks", Tasks.getAll);
    app.get("/tasks/:id", Tasks.getId);
    app.delete("/tasks/:id", Tasks.destroy);
    app.put("/tasks/:id", Tasks.getId);
    app.post("/tasks", Tasks.create)
}