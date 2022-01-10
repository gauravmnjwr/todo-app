const express= require('express');

const router= express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);  

router.get("/delete/",homeController.remove);

router.get('/getid/',homeController.getid);

console.log('router is working');

module.exports=router;

