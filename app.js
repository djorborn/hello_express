require('express')()
.use(function(req, res){
  res.send("Hello Express")})
.listen(3000);
