const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      // unique: true
    },
    duration: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: true
    }
    
})

 
module.exports = mongoose.model("recipe", RecipesSchema)