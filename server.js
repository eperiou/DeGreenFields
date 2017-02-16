const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes.js')

const app = express();

let PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://ericdevin:businessusersstuff@ds153659.mlab.com:53659/whatshappenin');


app.post('/login', (err,succes)=>{
  if(err){
    console.log(err);
  }else {
    console.log(succes);
  }
});

app.listen(PORT, () => {
  console.log('listening on 3000')
});

module.exports = app;
