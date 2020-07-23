var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const RecipeModel = require('../models/recipe')


/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send("<h1>works</h1>")
  console.log("hello world2")
});

router.get('/test', function(req, res, next) {
  res.send("Hello, I am on test page")
});

module.exports = router;
