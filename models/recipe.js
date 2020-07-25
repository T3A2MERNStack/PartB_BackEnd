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
  ingredients: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient'
  },
  instructions: {
      type: [String],
      required: true
  },
  category: {
    type: [String],
    required: true
  },
  tags: [
    { type: String }
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
      // default: Date.now()
      // default: new Date
    }
  }  
})



module.exports = mongoose.model("recipe", RecipesSchema)