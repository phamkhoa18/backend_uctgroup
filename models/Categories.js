const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title : {type : String , required : true} ,
    link  : {type : String , required : true} ,
    background : {type : String } ,
    parent_id : {type : mongoose.Types.ObjectId , ref : "Categories" , default : null} 
})

const Categories = mongoose.model('Categories' , categorySchema);
module.exports = Categories ;
