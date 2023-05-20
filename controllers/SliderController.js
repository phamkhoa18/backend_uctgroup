const Sliders = require('../models/Sliders');

const SliderController = {
    // ADD SLIDER
    Add_slider : async(req,res) => {
        try {
            const slider = await new Sliders({
                title : req.body.title ,
                description : req.body.description ,
                image : req.body.image , 
                link : req.body.link ,
                posision : req.body.posision
            })
            const slidersave = await slider.save() ;
            res.status(200).json({status : 200 , message : "Thêm slider thành công"});
        } catch (error) {
            res.status(404).json({status : 404 , message : "Lỗi rồi"});
        }
    },

    // LIST SLIDER
    List_slider : async(req ,res) => {
        try {
            const slider = await Sliders.find();
            res.status(200).json(slider);
        } catch (error) {
            res.status(404).json(error);
        }
    },


    // LIST SLIDER ONE POSISION 
    One_slider : async(req,res) => {
        try {
            const slider = await Sliders.findOne({posision : req.params.posision});
            if(slider) {
                res.status(200).json(slider);
            } else {
                res.status(404).json({message : "error"});
            }
        } catch (error) {
            res.status(404).json(error);
        }
    },

    Del_slider : async(req,res) => {
        try {
            const del = await Sliders.deleteOne({_id : req.params.id});
        if (del.deletedCount === 1) {
            res.status(200).json({status : 200 , message : 'Successfully deleted one document.'});
          } else {
            res.status(404).json({ status : 404 ,message : 'No documents matched the query. Deleted 0 documents.'});
          }
        } catch (error) {
            res.status(404).json(error);
        }
    }
}

module.exports = SliderController ;