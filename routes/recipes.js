var express = require('express');
var router = express.Router();
const RecipeModel = require('../models/recipe')
const { route } = require('.')

/* GET users listing. */
router.get('/lists', function(req, res, next) {
  // console.log(RecipeModel.find({"test": "test"}))
  RecipeModel.find({})
  .then(doc => res.status(200).send(doc))
  .catch(err => res.status(400).send("<h1>Error</h1>"))
});

router.post('/new', async (req, res) => {
  // console.log(req.body)
  // res.send(req.body)
  const recipe = new RecipeModel(req.body)
  try {
    await recipe.save(function (err) {
      if(err) console.log(err)
    });
    console.log(recipe)
    res.send(recipe);
  } catch (err) {
    res.status(404).send(err);
  }
})

router.patch('/edit/:id', async (req, res) => {
  try {
    await RecipeModel.findByIdAndUpdate(req.params.id, req.body)
    await RecipeModel.save()
    res.send(food)
  } catch (err) {
    res.status(500).send(err)
  }
})


router.delete('/delete/:id', async (req, res) => {
  try{
    const recipe = await RecipeModel.findByIdAndDelete(req.params.id)
    if(!recipe) res.status(404).send("No item found")
    res.status(200).send()
  }
  catch (err){
    res.status(500).send(err)
  }
})


module.exports = router;