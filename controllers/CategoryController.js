
const Categories = require('../models/Categories');
const Util = require('../Utils');
const mongoose = require('mongoose');
const MenuController = {
    Add_category : async (req,res) => {
        try {
            const category = new Categories({
                title : req.body.title , 
                link : Util.slug(req.body.title) ,
                parent_id : req.body.parent_id ,
                background : req.body.background 
            })
            console.log(category);
            const categorysave = await category.save()
            res.status(200).json(categorysave);
        } catch (error) {
            res.status(404).json({message : error});
        }
    } , 

    List_category : async (req,res) => {
        try {
            const category = await Categories.find();
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    Get_child_category : async (req,res) => {
        try {
            const categoryId = req.params.categoryId;
            const childCategories = await Util.getChildCategories(categoryId);
            console.log(childCategories);
            res.status(200).json(childCategories);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },


    find_category : async (req,res) => {
        try {
            const category = await Categories.find({parent_id : req.body.parent_id});
            if(category.length == 0 ) {
                res.status(200).json([]);
            }
            res.status(200).json(category)
        } catch (error) {
            res.status(404).json({message : error});
        }
    },


  
    getCategories :  async(req,res) =>  {
      const categories = await Categories.find({ parent_id: null }).lean();
      async function getChildren(category) {
        const children = await Categories.find({ parent_id: category._id }).lean();
        if (children.length > 0) {
          category.children = children;
          for (let i = 0; i < children.length; i++) {
            await getChildren(children[i]);
          }
        }
      }
    
      for (let i = 0; i < categories.length; i++) {
        await getChildren(categories[i]);
      }
    
      res.json(categories);
    },

    editCategory : async(req,res) => {
        const categorydatabase = await Categories.findByIdAndUpdate(req.body._id , {
            title : req.body.title ,
            parent_id : req.body.parent_id ,
            background : req.body.background
        })
        if(!categorydatabase) {
            res.status(404).json({message : "Sai id rồi"});
        }else{
            res.status(200).json(categorydatabase);
        }
    },

    delCategory : async(req,res) => {
        const del = await Categories.deleteOne({_id : req.body._id});
        if (del.deletedCount === 1) {
            res.status(200).json({message : 'Successfully deleted one document.'});
          } else {
            res.status(404).json({message : 'No documents matched the query. Deleted 0 documents.'});
          }
    },

    find_category_slug  :async (req,res) => {
        try {
            const parent = await Categories.findOne({link : req.params.slug});
            if(!parent) {
                res.status(200).json({message : "lỗi rồi nè"});
            }
            if(parent) {
                // đã lấy dc id , bây h trả về con của nó 
                const child = await Util.getChildCategories(parent._id);
                const parent_chilren = {parent , child};
                res.status(200).json(parent_chilren);
            }
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    find_category_id : async(req,res) => {
        try {
            const child = await Categories.find({parent_id : req.params._id});
            // có danh mục con 
            if(child.length > 0) {
                res.status(200).json(child);
            // không có danh mục con
            } else {
                res.json([]);
            }
        } catch (error) {
            res.status(404).json({message : error});
        }
    }

}


module.exports = MenuController ;
