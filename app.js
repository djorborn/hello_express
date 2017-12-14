var express = require('express');
var app = express();

app.use([express.urlencoded({extended: true}), express.json(), function(req, res, next){
  if(req.method == '/test'){
    res.send("Test");
  } else {
    next();
  }
}]).listen(3000);
