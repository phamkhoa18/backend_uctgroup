const router = require('express').Router();
const HomeController = require('../controllers/HomeController');

router.post('/addcontent' ,HomeController.Add_Content);

router.get('/listcontent' , HomeController.List_Content);

router.get('/listcontent/:posision' , HomeController.One_Content);

router.post('/editcontent' , HomeController.Edit_Content) ;

module.exports = router ;