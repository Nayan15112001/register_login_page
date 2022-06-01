const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth');


//welcome page
router.get('/', function(req,res){
  res.render('welcome');
});

//dashboard
router.get('/dashboard',ensureAuthenticated, function(req,res){
  res.render('dashboard', {
    name: req.user.name
  })

});

module.exports = router;
