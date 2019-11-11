var express = require('express');
var router = express.Router();
var users = require('../data.json').users;
var chapterList = require('../data.json').chapterList;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.post('/login', function(req, res, next) {
  var username=req.body.username;
  var pwd=req.body.pwd; 
  var userList = JSON.stringify(users);
  var userlists = JSON.parse(userList);
  if(userlists[0].username == username && userlists[0].password == pwd){
    res.end(JSON.stringify({"status":1}));
  }else{
    res.end(JSON.stringify({"status":0}));
    res.end("login error");
  };
});
router.get('/listmanager', function(req, res, next) {
  res.render('list',{chapterList:chapterList});
});
module.exports = router;
