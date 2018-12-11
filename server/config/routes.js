console.log("inside of routes.js");

const Tasks = require("../controllers/tasks");

module.exports = function(app){
    app.get("/tasks", Tasks.getAll);
    app.get("/task/:id", Tasks.getId);
    app.delete("/task/:id", Tasks.remove);
    app.put("/task/:id", Tasks.update);
    app.post("/tasks", Tasks.create)
}
