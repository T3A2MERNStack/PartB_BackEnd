var express = require('express');
var router = express.Router();
const RecipeModel = require('./recipes')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(RecipeModel.find())
  RecipeModel.find()
  .then(doc => res.status(200).send(doc))
  .catch(err => res.status(400).send("<h1>Error</h1>"))
});

module.exports = router;