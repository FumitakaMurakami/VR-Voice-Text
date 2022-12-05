var express = require('express');
var app = express();
app.use(express.static(__dirname));

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/post', function(req, res) {
  for (key in req.body) {
    console.log(key, '=', req.body[key]);
  }
  res.end();
});
app.listen(process.env.PORT || 8080);

console.log("server start!");