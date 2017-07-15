const express = require("express");
const router = express.Router();
const models = require("../models");

router.get('/', function(req, res){

  if (!req.session.user){
    res.redirect('/login')
  } else{
    models.blabs.findAll(
      {
        include: [
          {
            model: models.users,
            as: 'User'
          },
          {
            model: models.likes,
            as: 'Likes'
          }
        ]
      }
    )
    .then(function(blabs){

      // console.log("blabs", blabs)

      res.render('main', {
        blabs:blabs
      })
    })
  }
})

router.get('/mine', function(req, res){
  if (!req.session.user){
    res.redirect('/login')
  } else{
    models.blabs.findAll(
      {
        where: {
          userid: req.session.user.id,
        },
        include: [
          {
            model: models.users,
            as: 'User'
          },
          {
            model: models.likes,
            as: 'Likes'
          }
        ]
      }
    )
    .then(function(blabs){

      // console.log("blabs", blabs)

      res.render('mine', {
        blabs:blabs
      })
    })
  }
})


module.exports = router;
