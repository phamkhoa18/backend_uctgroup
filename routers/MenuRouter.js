const router = require('express').Router();
const MenuController = require('../controllers/MenuController');

router.post('/addmenu' , MenuController.Add_menu);

router.get('/listmenu' , MenuController.List_menu);

router.post('/editmenu' , MenuController.Edit_menu);

router.get('/findmenu/:slug' , MenuController.Find_menu);

router.post('/delmenu' , MenuController.Del_menu);

router.post('/update_index_menu' , MenuController.Update_menu);


module.exports = router ;