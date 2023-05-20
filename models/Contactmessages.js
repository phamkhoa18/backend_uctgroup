const mongoose = require('mongoose');

const contactmessageSchema = new mongoose.Schema({
    username      : {type : String , required : true} ,
    email         : {type : String , required : true} ,
    address       : {type : String , required : true} ,
    phone         : {type : Number , required : true} ,
    title_contact : {type : String , required : true} ,
    description   : {type : String , required : true} ,
    active        : {type : Boolean , default : false} 
})

const Contactmessages = mongoose.model('Contactmessages' , contactmessageSchema);
module.exports = Contactmessages ;
