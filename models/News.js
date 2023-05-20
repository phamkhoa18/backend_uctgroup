const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    title       : {type : String , required : true} ,
    description : {type : String , required : true} ,
    image       : [String] ,
    category_id : {type : mongoose.Types.ObjectId , ref : 'Categories'} ,
    slug : {type : String } ,
    outstanding : {type : Boolean , default : false} ,
    created_at  : {type : Date , default : Date.now()},
    updated_at  : {type : Date , default : Date.now()},
})

newSchema.index({title : "text"});

const News = mongoose.model('News' , newSchema);
module.exports = News ;
