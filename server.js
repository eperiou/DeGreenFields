let path = require('path');
const express = require('express');
const app = express();
let PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});


app.listen(PORT, function() {
  console.log('listening on 3000')
})
