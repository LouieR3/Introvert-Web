//required
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

//middleware
app.use(cors());
app.use(express.static("public"));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//Host Website
var server = app.listen(5000, () => {
  var port = server.address().port;
  console.log("Listening on http://localhost:%s",port);
});
