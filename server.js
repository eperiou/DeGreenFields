let path = require('path');
const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;
const bodyparser = require('body-parser');


app.use(express.static(path.join(__dirname, '/build')));





app.listen(PORT, function() {
  console.log('listening on 3000')
})
