const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: false,
      unique: true
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