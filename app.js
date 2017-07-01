
const express = require("express");
const app = express();
const mustache = require("mustache-express");
// const models = require("./models");
const faker = require("faker");
const bodyParser = require("body-parser");
const validator = require("express-validator");
const session = require("express-session");
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.listen(3000, function(){
  console.log("here i go! zoom~ http://0.0.0.0:3000")
})

app.get('/login', function(req, res){
  res.render('login')
})

app.get('/signup', function(req, res){
  res.render('signup')
})

app.get('/new', function(req, res){
  res.render('new')
})

app.get('/edit', function(req, res){
  res.render('edit')
})

app.get('/blab', function(req, res){
  res.render('blab')
})

app.get('/main', function(req, res){
  res.render('main')
})

app.get('/mine', function(req, res){
  res.render('main')
})
