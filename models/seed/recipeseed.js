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
}),
new recipeModel({
    productName: 'Diffuser',
    productSummary: 'natural diffuser',
    prepTime: 15,
    ingredients: [{
        ingredientName: ['Narrow neck glass bottle', 'Reeds', 'Favourite Essential Oil', 'Apricot Kernel Oil', 'light flavoured spirit (vodka)'],
        amount: [1, 10, 20, 1/4, 2],
        unit:  ['unit', 'unit', 'drop', 'cup', 'tb' ]
    }],
    instructions: ['In a measuring cup with a pouring spout mix together kernal oil and spirit', 'use either a metal spoon or reed to combine the first two ingredients', 'stir in essential oil until well combined', 'pour mixture into bottle', 'add in reeds', 'rotate reeds weekly' ],
    category: "Home Care",
    tags: "not sure",
    rating: 3,
    comments: 'reeds can be bought on amazon and other online stores', 
}), 
new recipeModel({
    productName: 'Body Butter',
    productSummary: 'Thick homemade moisturiser to keep you feeling soft',
    prepTime: 15,
    ingredients: [{
        ingredientName: ['Cocoa butter buttons', 'Shea Butter', 'Coconut Oil', 'Olive oil'],
        amount: [1, 1, 1, 1],
        unit:  ['cup', 'cup', 'cup', 'cup' ]
    }],
    instructions: ['set aadd all ingredients into a saucepan ', 'stir on low heat until all ingredients are melted', 'remove from heat and set aside in fridge until firm (about one hour)', 'remove from fridge and mix with electric hand mixer until thick and creamy', 'transfer mixture into sterilised jars'],
    category: "Skincare",
    tags: "not sure",
    rating: 4,
    comments: 'shea butter, coconut oil and cocoa butter buttons can all be found on amazon or other online retailers.', 
})
]

 
module.exports = mongoose.model("recipeseed", recipeed)