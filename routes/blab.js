const express = require("express");
const router = express.Router();
const models = require("../models");

router.get('/new', function(req, res){
  res.render('new')
})

router.post('/new/addblab', function(req,res){
  var newblab = models.blabs.build({
    userid: req.session.user.id,
    body: req.body.newblab
  })
  newblab.save();
  res.redirect("/")
})


router.post('/blab/delete/:id', function(req,res){
  models.blabs.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.redirect('/')
})

router.get('/blab/edit/:id', function(req,res){
  var blabid = req.params.id
  models.blabs.findOne({
    where: {
      id : blabid
    }
  })
  .then(function(blab){
    res.render('edit',{
      blab: blab
    })

  })
})

router.post('/blab/edit/:id/editme', function(req, res){
  models.blabs.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(blab){
    blab.body = req.body.editblab;
    blab.save()
  })
  .then(function(){
    res.redirect('/mine')
  })
})

router.post('/blab/:id/like', function(req,res){
  var newLike = models.likes.build({
    userid: req.session.user.id,
    blabid: req.params.id
  })
  newLike.save()
  res.redirect("/")
})


module.exports = router;
