const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/addcategory' , CategoryController.Add_category);

router.get('/listcategory' , CategoryController.List_category);


router.get('/categories/:categoryId/children' , CategoryController.Get_child_category);


router.post('/find_category' , CategoryController.find_category);

router.get('/getCategories' , CategoryController.getCategories);

// edit 
router.post('/edit_category' , CategoryController.editCategory);

// del
router.post('/del_category' , CategoryController.delCategory);

// find slug 
router.get('/find_category_slug/:slug' , CategoryController.find_category_slug)

// find _id 
router.get('/find_category_id/:_id' , CategoryController.find_category_id) ;

module.exports = router ;