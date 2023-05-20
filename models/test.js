const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title : String , 
    content : String 
})

const tests = mongoose.model('tests' , testSchema);
module.exports = tests ;