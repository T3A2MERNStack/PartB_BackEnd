const mongoose = require('mongoose')
const recipeModel = require('../recipe')


const recipeed = [ new recipeModel({
    productName: "Coffee Exfoliator",
    productSummary: "...",
    prepTime: 5,
    ingredients: [{
        ingredientName: ['Discarded coffee grounds', 'Coconut Oil'],
        amount: [1, 1/4],
        unit:  ["cup(s)", "cup(s)"]
    }],
    instructions: ["combine coffee grounds and coconut oil in a large bowl", "stir to combine", "store in a steralised jar for up to 3months"],
    category: "Skincare",
    tags: "not sure",
    rating: 5,
    comments: null,

    
})]

 
module.exports = mongoose.model("recipe", RecipesSchema)