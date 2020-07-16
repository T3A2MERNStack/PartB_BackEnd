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

router.post('/', async (req, res) => {
  console.log(req.body)
  const recipe = new RecipeModel(req.body)
  try {
    await recipe.save();
    res.send(recipe);
  } catch (err) {
    res.status(404).send(err);
  }
})

router.delete('/', async (req, res) => {
  RecipeModel.deleteOne({id: req.params.id})
    .then(doc => res.send(doc))
    .catch(err => res.status(404).send(err))
})




module.exports = router;