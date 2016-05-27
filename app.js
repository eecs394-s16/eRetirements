var express = require('express'),
  app = express(),
  path = require("path");

  var port = process.env.PORT || 8000;

  app.use(express.static(__dirname));

  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.listen(port);
  console.log("listening on port " + port)
