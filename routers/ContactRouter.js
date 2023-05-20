const router = require('express').Router();
const ContactController = require('../controllers/ContactController');

router.post('/sendcontact' ,ContactController.Send_contact);

router.get('/listcontact' , ContactController.List_contact);

router.get('/delcontact/:id' ,ContactController.Del_contact );

router.post('/handleupdate' , ContactController.Handle_Update);

router.get('/soluongcanxuly' , ContactController.Xuly_contact);
module.exports = router ;