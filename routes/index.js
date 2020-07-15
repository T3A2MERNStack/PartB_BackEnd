var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: false
    }
})
RecipeModel = mongoose.model("recipe", RecipeSchema)

mongoose.connect(
  "mongodb+srv://team-girls:ETsiWzgdCynyWMzZ@cluster0.zfqjd.mongodb.net/eco-recipe?retryWrites=true&w=majority",
  { useNewUrlParser: true,
  useUnifiedTopology: true },
  error => {
    if(error){
      console.log("there was an error")
      throw error
    } else {
      console.log("we are connected")
    }
  }
)

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
