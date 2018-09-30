//required
const express = require('express');
const cors = require('cors');
const app = express();

//use
app.use(cors());
app.use(express.static('public'));
app.use(express.static('public/stylesheets/style.css'));

app.get('/index.html', function(req, res) {
  res.sendFile( __dirname + "/index.html");
  console.log("Loaded Index Home Page.");
});

//Host Website
var server = app.listen(5000, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening on http://%s:%s",host,port);
});
