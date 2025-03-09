const express = require('express');
const  homeController = require('../controllers/homeController');
const { home } = homeController;



const router = express.Router();

router.get('/', home);



module.exports ={
    routes : router
}
