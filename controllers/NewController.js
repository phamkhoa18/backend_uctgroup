const News = require ('../models/News');
const Utils = require('../Utils');
const NewController = {
    
    Add_new : async (req,res) => {
        try {
            const news = await new News({
                title : req.body.title ,
                description : req.body.description , 
                image : req.body.image ,
                slug : Utils.slug(req.body.title),
                category_id : req.body.category_id ,
                outstanding : req.body.outstanding 
            })
            const newsave = await news.save() ;
            res.status(200).json(newsave);
        } catch (error) {
            res.status(404).json(error);
        }
    },
    
    List_new : async(req,res) => {
        try {
            const list = await News.find().populate('category_id') ;
            res.status(200).json(list) ;
        } catch (error) {
            res.status(404).json(error);
        }
    },

    Find_new_Category : async(req,res) => {
        try {
            const list = await News.find({category_id : req.body.id_category});
            res.status(200).json(list);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    Find_new_Category_get : async (req,res) => {
        try {
            const list = await News.find({category_id : req.params._id});
            res.status(200).json(list);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    One_new : async(req,res) => {
        try {
            const one = await News.findOne({slug : req.params.slug});
            res.status(200).json(one);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    Update_new : async(req,res) => {
        try {
            const database = await News.findByIdAndUpdate(req.body._id , {
                title : req.body.title ,
                description : req.body.description , 
                image : req.body.image ,
                slug : Utils.slug(req.body.title),
                category_id : req.body.category_id ,
                outstanding : req.body.outstanding 
            })

            if(database){
                res.status(200).json({message : "update thanh cong"});
            } else {
                res.status(404).json({message : "Khong ton tai "});
            }
        } catch (error) {
            res.status(404).json(error);
        }
    },

    Del_new : async(req , res) => {
        try {
            const del = await News.deleteOne({_id : req.body._id});
        if (del.deletedCount === 1) {
            res.status(200).json({message : 'Successfully deleted one document.'});
          } else {
            res.status(404).json({message : 'No documents matched the query. Deleted 0 documents.'});
          }
        } catch (error) {
            res.status(404).json({message : "xóa thất bại "});
        }
    },

    Outstanding : async(req,res) => {
        try {
            const outstanding = await News.find({outstanding : true});
            res.status(200).json(outstanding);
        } catch (error) {
            res.status(494).json(error);
        }
    },

    Find_new_slug : async(req,res) => {
        try {
            const news = new News.find({})
        } catch (error) {
            
        }
    },

    Tim_kiem : async(req,res) => {
        try {
            const timkiem = req.body.timkiem;
            const data = await News.find({ $text: { $search: timkiem } });
            if(data.length > 0) {
                // có dữ liệu trả về 
                res.status(200).json({status : 200 , data});
            } else {
                res.status(200).json({status : 404 , data});
            }
        } catch (error) {
            res.status(404).json(error);
        }
    },

    So_luong : async(req,res) => {
        try {
            const count = await News.countDocuments();
            res.status(200).json(count);
        } catch (error) {
            res.status(404).json(error);
        }
    }
}

module.exports = NewController ;
