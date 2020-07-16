const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    date: {
        type: String,
        default: Date.now
    }
})

 
module.exports = mongoose.model("user", UserSchema)