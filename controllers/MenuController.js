const Menus = require('../models/Menus');
const Util = require('../Utils');
const MenuController = {

    Add_menu : async (req,res) => {
        try {
            const menu = new Menus({
                title : req.body.title , 
                link : 'vn/' + Util.slug(req.body.title),
                slug : Util.slug(req.body.title),
                category_id : req.body.category_id
            })
            const menusave = await menu.save();
            res.status(200).json(menusave);
        } catch (error) {
            res.status(404).json({message : error});
        }
    } , 

    List_menu : async (req,res) => {
        try {
            const menu = await Menus.find().sort('posision');
            res.status(200).json(menu);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    Del_menu : async(req,res) => {
        try {
            const del = await Menus.deleteOne({_id : req.body._id});
        if (del.deletedCount === 1) {
            res.status(200).json({message : 'Successfully deleted one document.'});
          } else {
            res.status(404).json({message : 'No documents matched the query. Deleted 0 documents.'});
          }
        } catch (error) {
            res.status(404).json({message : "lỗi "});
        }
    },

    Edit_menu : async(req,res) => {
        try {
            const menudatabase = await Menus.findByIdAndUpdate(req.body._id , {
                title : req.body.title ,
                category_id : req.body.category_id ,
                link : Util.slug(req.body.title),
                slug : Util.slug(req.body.title),
            })
            if(!menudatabase) {
                res.status(404).json({message : "Sai id rồi"});
            }else{
                res.status(200).json(menudatabase);
            }
        } catch (error) {
            
        }
    },

    Find_menu : async(req,res) => {
        try {
            const find = await Menus.findOne({slug : req.params.slug}).populate('category_id');
            if(find) {
                res.status(200).json(find);
            } 
            if(!find) {
                res.json({});
            }
        } catch (error) {
            res.status(404).json(error);
        }
    },

    Update_menu : async(req , res) => {
        try {
            // set giá trị posision về 0 
            const updateMenuArray = await Menus.updateMany({} , {$set : {posision : 0}});
            var menuArrayNew = req.body.menuarraynew ;
            // set giá trị mới cho posision
            for (let i = 0; i < menuArrayNew.length; i++) {
                await Menus.updateOne({_id: menuArrayNew[i]._id}, {$set: {posision: i}});
            }
            res.status(200).json({ status : 200 , message: 'Update menu success!' });
        } catch (error) {
            res.status(500).json({  status : 500, message: 'Server error!' });
        }
    }

}

module.exports = MenuController ;
