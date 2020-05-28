const express=require('express');
// add express router to toute the data
const router = express.Router();

// add the home_controller file for add the controller
const homeController=require('../controllers/home_controller');

// add the router as get & post request
router.get('/',homeController.home);
router.post('/create-todo',homeController.create);
router.post('/delete-todo',homeController.delete);
module.exports=router;