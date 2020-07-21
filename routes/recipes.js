const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    duration: {
      type: String,
      required: false
    }
})

 
module.exports = mongoose.model("recipe", RecipesSchema)