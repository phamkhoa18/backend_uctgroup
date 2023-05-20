const router = require('express').Router();
const SliderController = require('../controllers/SliderController');

router.post('/addslider' ,SliderController.Add_slider);

router.get('/listslider' , SliderController.List_slider);

router.get('/delslider/:id' , SliderController.Del_slider);

router.get('/oneslider/:posision' , SliderController.One_slider);

module.exports = router ;