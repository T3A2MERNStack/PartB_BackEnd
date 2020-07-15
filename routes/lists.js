var express = require('express');
var router = express.Router();
const RecipeModel = require('./recipes')
const { route } = require('.')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(RecipeModel.find())
  RecipeModel.find()
  .then(doc => res.status(200).send(doc))
  .catch(err => res.status(400).send("<h1>Error</h1>"))
});

router.post('/', function(req, res) {
  // console.log(req.body)
  res.send(`you sent: ${JSON.stringify(req.body)}`)
})

module.exports = router;