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
      required: false,
      validate(value) {
        if (value < 0) throw new Error("Prep Time must be greater than 0");
    },
    ingredients: [
      {
        ingredientName: {type: [String], required: true},
        amount: {
          ingredientAmount: [String],
          unitName: String },
        unit: {
          amountUnit: String,  
          enum: ['tsp', 'tbl', 'cup(s)', 'drop(s)', 'ml', 'L', 'g', 'unit'], 
        }
     }],
    instructions: [
        {
          type: [String],
          required: true
        }
    ],
    category: {
      type: String,
      enum: ['Skincare', 'Home Care', 'Personal Care', 'Cleaning'],
      required: true
    },
    tags: [
        {type: String}
    ],
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
        default: Date.now
      }
    }  
})

 
module.exports = mongoose.model("recipe", RecipesSchema)