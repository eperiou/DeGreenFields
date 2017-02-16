const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;





app.get('/', function (req, res) {
  res.send('Hello World');
})


app.listen(PORT, function() {
  console.log('listening on 3000')
})
