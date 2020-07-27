const mongoose = require('mongoose')

 const RecipesSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productSummary: {
    type: String
  },
  prepTime: {
    type: Number,
    required: false,
  },
  ingredients: [
    {
    name: { type: String },
    amount: { type: Number },
    unit: { type: String}
    }
  ]
  ,
  steps: [ {type: String} ],
  category: {
    type: String,
    required: true
  },
  tags: [
    {type: String}
  ] 
  ,
  rating: {
    type: Number,
    userID: String,
    required: false
  },
  comments: {
    comment: {
      recipeID: String,
      userId: String,
      commentBody: String,
    }
  },
  userId: {type: String, required: true}
})



module.exports = mongoose.model("recipe", RecipesSchema)