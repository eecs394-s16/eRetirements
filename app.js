var express = require('express'),
  app = express(),
  OAuth = require('oauth');

  var port = process.env.PORT || 8000;

  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.listen(port);
