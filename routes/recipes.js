var express = require('express');
var router = express.Router();
const RecipeModel = require('../models/recipe')
const { route } = require('.')
const { isLoggedIn } = require('./authorize')

router.get('/me/:id', async (req, res) =>{
  // console.log(req.params.id)
  const recipes = await RecipeModel.find({userId: req.params.id})
  // console.log(recipes)
  res.send(recipes)
})

router.get('/category/:id', async (req, res) =>{
  // console.log(req.params.id)
  const recipes = await RecipeModel.find({category: "skin"})
  // console.log(recipes)
  res.send(recipes)
})

router.get('/categoryc/:id', async (req, res) =>{
  // console.log(req.params.id)
  const recipes = await RecipeModel.find({category: "cleaning"})
  // console.log(recipes)
  res.send(recipes)
})

router.get('/categoryhc/:id', async (req, res) =>{
  // console.log(req.params.id)
  const recipes = await RecipeModel.find({category: "home"})
  // console.log(recipes)
  res.send(recipes)
})

router.get('/categorypc/:id', async (req, res) =>{
  // console.log(req.params.id)
  const recipes = await RecipeModel.find({category: "personal"})
  // console.log(recipes)
  res.send(recipes)
})

router.get('/myrecipe/:id', async (req, res) =>{
  // console.log(req.params.id)
  const recipes = await RecipeModel.find({userId: req.params.id})
  // console.log(recipes)
  res.send(recipes)
})

/* GET users listing. */
router.get('/lists', function(req, res, next) {
  // console.log(RecipeModel.find({"test": "test"}))
  RecipeModel.find({})
  .then(doc => res.status(200).send(doc))
  .catch(err => res.status(400).send("<h1>Error</h1>"))
});

router.get('/get/:id', function(req, res, next) {
  // console.log(RecipeModel.find({"test": "test"}))
  RecipeModel.find({_id: req.params.id})
    .then(doc => res.status(200).send(doc))
    .catch(err => res.status(400).send("<h1>Error</h1>"))
});

router.post('/new', isLoggedIn, (req, res) => {
  const recipeData = req.body.recipe
  console.log(req.body.recipe)
    RecipeModel.create(recipeData)
    .then(doc => {
      console.log(doc)
      res.status(200).send({publicId: doc._id })}
      )
    .catch(err => {
      console.log(err)
      res.status(404).send({message: err.message})}
      )
})

router.put('/edit/:id', (req, res) => {
  // console.log('hit here ')
  console.log(req.body)
  // console.log(req.params.id)
  RecipeModel.findByIdAndUpdate(
    req.params.id,
    req.body.recipe,
    { useFindAndModify: false },
    function(err, user){
      if(err){
          res.json({error :err}) ; 
      } else{
          console.log(user)
          res.send(user) ; 
      }
  })
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