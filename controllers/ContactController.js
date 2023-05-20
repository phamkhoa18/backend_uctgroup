const Contactmessages = require('../models/Contactmessages');
const ContactController = {
    // SEND CONTACT
    Send_contact : async (req,res) => {
        try {
            const user = new Contactmessages({
                username : req.body.username , 
                email    : req.body.email ,
                address  : req.body.address ,
                phone    : req.body.phone , 
                title_contact    : req.body.title_contact ,
                description   : req.body.description 
            })
            const usersave = await user.save() ;
            res.status(200).json({status : 200 , message : "Gửi thành công"});
        } catch (error) {
            res.status(404).json({status : 404 , message : "Không thành công"});
        }
    },

    // LIST CONTACT SENT
    List_contact : async (req,res) => {
        try {
            const user = await Contactmessages.find() ;
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    // ĐÃ XỬ LÝ KHÁCH HÀNG GỬI LÊN :
    Handle_Update : async (req,res) => {
        try {
            const dataone = await Contactmessages.findByIdAndUpdate(req.body._id , {
                username : req.body.username ,
                email : req.body.email , 
                address : req.body.address ,
                phone : req.body.phone ,
                title_contact : req.body.title_contact ,
                description : req.body.description ,
                active : req.body.active 
            })
            
            if(dataone) {
                res.status(200).json({status : 200 , message : "update thành công"});
            }
            else {
                res.status(404).json({status : 404 , message : "không thành công"});
            }
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    Del_contact  : async(req,res) => {
        try {
            try {
                const del = await Contactmessages.deleteOne({_id : req.params.id});
            if (del.deletedCount === 1) {
                res.status(200).json({ status : 200 , message : 'Successfully deleted one document.'});
              } else {
                res.status(200).json({ status : 404 , message : 'No documents matched the query. Deleted 0 documents.'});
              }
            } catch (error) {
                res.status(404).json({ status : 404 , message : "lỗi "});
            }
        } catch (error) {
            
        }
    },

    Xuly_contact : async (req,res) => {
        try {
            const count = await Contactmessages.countDocuments({active : false});
            res.status(200).json(count);
        } catch (error) {
            res.status(404).json(error);
        }
    }
}

module.exports = ContactController ;
