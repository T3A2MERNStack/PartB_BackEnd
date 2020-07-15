var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const RecipeModel = require('./recipes')


/* GET home page. */
router.get('/', (req, res) => {
  RecipeModel.create({
      name: "cheese cake",
      duration: "34"
  })
  .then(doc => res.status(200).send("<h1>works</h1>"))
  .catch(err => res.status(400).send("<h1>Error</h1>"))
  console.log("hello world2")
});

router.get('/test', function(req, res, next) {
  res.send("Hello, I am on test page")
});

module.exports = router;
