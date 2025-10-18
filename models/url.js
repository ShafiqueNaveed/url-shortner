const mongoose = require("mongoose")
const {Schema} = require("mongoose")

const urlSchema = new Schema({
    long: {
        type: String,
        required: true
    },
    short: {
        type: String
    }
})

const URL = mongoose.model("URL" , urlSchema)

module.exports = {
    URL
}