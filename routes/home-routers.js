const express = require('express');
const  homeController = require('../controllers/homeController');
const { home, generatePdf } = homeController;



const router = express.Router();

router.get('/', home);
router.get('/download', generatePdf);




module.exports ={
    routes : router
}
