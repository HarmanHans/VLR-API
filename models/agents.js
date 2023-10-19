const mongoose = require('mongoose')

const agentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Agents', agentsSchema)