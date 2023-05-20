const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    title : {type : String } ,
    content   : {type : String } ,
    posision : {type : String , default : ''}
})

const Homes = mongoose.model('Homes' , homeSchema);
module.exports = Homes ;
