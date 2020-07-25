const mongoose = require('mongoose')

 const RecipesSchema = new mongoose.Schema({
// const RecipesSchema = new mongoose.Schema({
//   publicId: {
//     type: String,
//     required: true
//   },
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
  
  instructions: [
    {
      type: [String],
      required: true
    }
  ],
  category: {
    type: String,
    //enum: ['Skincare', 'Home Care', 'Personal Care', 'Cleaning'],
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