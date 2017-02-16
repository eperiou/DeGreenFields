const express = require('express');
const app = express();

var mongoose = require('mongoose');
let PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://ericdevin:businessusersstuff@ds153659.mlab.com:53659/whatshappenin');


app.post('/login', (err,succes)=>{
  if(err){
    console.log(err);
  }else {
    console.log(succes);
  }
});

app.listen(PORT, function() {
  console.log('listening on 3000')
})

module.exports = app;
