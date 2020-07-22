const mongoose = require('mongoose')

const ProcessSchema = new mongoose.Schema({
    step: {
      type: [String],
      required: true
    }
})

 
module.exports = mongoose.model("process", ProcessSchema)