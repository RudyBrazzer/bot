const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    Guild: String,
    Role: String
})

module.exports = mongoose.model('Mute-Role', Schema, 'Mute-Role')
