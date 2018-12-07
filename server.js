const express = require("express"),
         path = require('path'),
           bp = require("body-parser"),
          app = express(),
      db_name = "RestfulTask",
         port = 8000;

app.use(bp.json());
app.use(express.static( __dirname + '/angular-app/dist/angular-app' ));
app.set('views', path.join(__dirname, './views'));

require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});