const router = require('express').Router();
const NewController = require('../controllers/NewController');

router.post('/addnew' , NewController.Add_new);

router.get('/listnew' , NewController.List_new);

router.post('/findnewcategory' , NewController.Find_new_Category);

router.get('/findnewcategory/:_id' , NewController.Find_new_Category_get);

router.get('/listnew/:slug' , NewController.One_new);

router.post('/updatenew' , NewController.Update_new);

router.post('/delnew' , NewController.Del_new);

router.get('/outstanding' , NewController.Outstanding);

router.get('/findnew/:slug' , NewController.Find_new_slug);

router.post('/tim-kiem' , NewController.Tim_kiem );

router.get('/soluongbaiviet' , NewController.So_luong);
module.exports = router ;