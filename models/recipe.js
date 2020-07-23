const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true
    },
    productSummary:{
      type: String
    },
    prepTime: {
      type: Number,
      required: false
    },
    ingredients: [
      {
        ingredientName: {type: String, required: false},
        amount: [{
          ingredientAmount: String,
          unitName: String
        }]
     }
    ],
    instructions: [
        {
          type: String,
          required: true
        }
    ],
    category: {
      type: String,
      required: true
    },
    tags: [
        {type: String}
    ],
    rating: {
      type: Number
    },
    comments: {
      comment: {
        recipeID: String,
        userId: String,
        commentBody: String,
        date: Date
      }
    }  
})

 
module.exports = mongoose.model("recipe", RecipesSchema)