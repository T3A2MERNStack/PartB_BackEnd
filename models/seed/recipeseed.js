const mongoose = require('mongoose')
const recipeModel = require('../recipe')


const recipeed = [ new recipeModel({
    productName: 'Coffee Exfoliator',
    productSummary: 'Exfoliator from used coffee bean grinds',
    prepTime: 5,
    ingredients: [{
        ingredientName: ['Discarded coffee grounds', 'Coconut Oil'],
        amount: [1, 1/4],
        unit:  ['cup(s)', 'cup(s)']
    }],
    instructions: ['combine coffee grounds and coconut oil in a large bowl", "stir to combine", "store in a steralised jar for up to 3months'],
    category: 'Personal Care',
    tags: 'not sure',
    rating: 5,
    comments: null,  
}),
new recipeModel({
    productName: 'Washing Powder',
    productSummary: 'natural washing powder',
    prepTime: 20,
    ingredients: [{
        ingredientName: ['Coconut oil soap', 'lemon or lavender essential oil', 'white vinegar', 'pure washing soda'],
        amount: [1, 2, 2, 1],
        unit:  ['unit', 'drop', 'cup', 'cup' ]
    }],
    instructions: ['grate coconut oil soap', 'combine the rest of the ingredients', 'store in 1L glass or stainless steel container'],
    category: "Cleaning",
    tags: "not sure",
    rating: 5,
    comments: null,  
]

 
module.exports = mongoose.model("recipe", RecipesSchema)