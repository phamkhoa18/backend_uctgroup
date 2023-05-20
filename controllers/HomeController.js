const Homes = require('../models/Home');
const HomeController = {
    // ADD CONTENT
    Add_Content : async (req,res) => {
        try {
            const content = new Homes({
               title : req.body.title ,
               content : req.body.content ,
               posision : req.body.posision 
            })
            const contentsave = await content.save() ;
            res.status(200).json({status : 200 , message : "Gửi thành công"});
        } catch (error) {
            res.status(404).json({status : 404 , message : "Không thành công"});
        }
    },

    // LIST Content 
    List_Content : async (req,res) => {
        try {
            const user = await Homes.find() ;
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    // ONE CONTENT
    One_Content : async (req,res) => {
        try {
            const data = await Homes.findOne({posision : req.params.posision});
            if(data) {
                res.status(200).json(data) ;
            } else {
                res.status(404).json({status : 404 , message : "lỗi rồi"});
            }
        } catch (error) {
            res.status(404).json(error);
        }
    },

    // EDIT CONTENT
    Edit_Content : async(req,res) => {
        try {
            const data = await Homes.updateOne({_id : req.body._id} , {
                title : req.body.title ,
                content : req.body.content ,
                posision : req.body.posision 
            })

            if(data) {
                res.status(200).json({status : 200 , message : "updte thanh2 cong"});
            } else {
                res.status(404).json({status : 404 , message : "updte that bai"});
            }

        } catch (error) {
            res.status(404).json({status : 404 , message : "updte that bai"});
        }
    }

   
}

module.exports = HomeController ;
