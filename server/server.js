var express = require('express');
var app = express();
var bodyParser = require('body-parser');
console.log("connected to server")

app.use('/',express.static('client'));

//before trying to connect to the database, saving messages to array. refresh when server restarts
//initiated dummy data so the page isn't blank.
var UserModel = [
  {
    username: 'iam_samara',
    date: '08-03-15',
    comment:"today you are you, that is truer than true, there is no one alive that is youer that you!"
  },
  {
    username: 'armackey',
    date: '08-03-15',
    comment:"The mack attack"
  },
  {
    username: 'jasmine',
    date: '08-03-15',
    comment:"janky"
  }];

app.use(bodyParser.json());

app.get('/comments', function(req,res){
  res.send(UserModel);
});

//pushes new message to the userModel array
app.post('/comments', function(req,res){
  UserModel.push(req.body);
  console.log("message saved?");
  res.send(req.body);
});

app.listen(3000);
