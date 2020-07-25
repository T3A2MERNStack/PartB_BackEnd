
const mongoose = require('mongoose')

const RecipesSchema = new mongoose.Schema({
        ingredientName: { type: [String], required: true },
        amount: {
            ingredientAmount: [String],
            unitName: String
        },
        unit: {
            amountUnit: String,
            enum: ['tsp', 'tbl', 'cup(s)', 'drop(s)', 'ml', 'L', 'g', 'unit'],
        }
        }