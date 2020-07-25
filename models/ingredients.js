
const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
        name: { type: [String], required: true },
        amount: { type: [Number], required: true },
        unit: { type: [String], required: true }
        })

const Ingredient = mongoose.model("Ingredient", IngredientSchema)
module.exports = Ingredient
