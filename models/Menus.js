const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    title : {type : String , required : true} ,
    link  : {type : String , required : true} ,
    category_id : {type : mongoose.Types.ObjectId , ref : "Categories" , default : ''} ,
    slug : {type : String , default : ''} ,
    posision : {type : Number , default : 0} 
})

const Menus = mongoose.model('Menus' , menuSchema);
module.exports = Menus ;
