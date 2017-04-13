const express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.use(function (req,res,next){
  if(req.headers['x-forward-proto']==='http'){
    next();
  }else{
    res.redirect("http://" + req.hostname + req.url);
  }
});


app.use(express.static("public"));


app.listen(port,()=>{
  console.log("server start up!");
})
