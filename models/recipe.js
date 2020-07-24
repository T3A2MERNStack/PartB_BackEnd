const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({recipe: {
    productName: {
      type: String,
      required: true
    },
    productSummary:{
      type: String
    },
    prepTime: {
      type: Number,
      required: false,
      validate(value) {
        if (value < 0) throw new Error("Negative calories aren't real.");
      }
    },
    ingredients: [
      {
        ingredientName: {type: String, required: false},
        amount: {
          ingredientAmount: String,
          unitName: String
        }
     }
    ],
    steps: [
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
    ]
}})

 
module.exports = mongoose.model("recipe", RecipesSchema)