const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/login", function(req, res) {
  res.render("login")
})

//
// app.get('/login', function(req, res){
//   res.render('login')
// })

router.post('/login/logmein', function(req, res) {
  models.users.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
    .then(function(user) {
      if (user) {
        req.session.user = {
          id: user.id,
          username: user.username
        }
        console.log(req.session)
        res.redirect('/')
      } else {
        res.render('login', {

        })
      }
    })
})

router.get('/signup', function(req, res) {
  res.render("signup")
})

router.post('/signup/newuser', function(req, res) {
  var newLogin = models.users.build({
    username: req.body.username,
    password: req.body.password
  })
  newLogin.save()
    .then(function(newUser) {
      req.session.user = {
        id: newUser.id,
        username: newUser.username
      }
      res.redirect('/')
    })
})

router.post('/logout', function(req,res){
  req.session.user = {
    id : false,
    username: false
  }
  res.redirect('/login')
})

module.exports = router;
