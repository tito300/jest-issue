const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: String
})

const Model = mongoose.model('test', schema);

module.exports = Model;