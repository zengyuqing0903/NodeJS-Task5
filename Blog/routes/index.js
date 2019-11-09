var express = require('express');
var router = express.Router();
var users = require('../data.json').users;
var chapterList = require('../data.json').chapterList;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',function(req,res,next){
  res.render("login");
})    
router.get('/login',function(req,res,next){
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write(JSON.stringify(users));
  res.end();  
})
router.get('/list',function(req,res,next){
  res.render("list",{chapterList:chapterList});
}) 
module.exports = router;
