const express = require('express');
const  homeController = require('../controllers/homeController');
const { home,generatePDF } = homeController;



const router = express.Router();

router.get('/', home);
router.get('/download',generatePDF);



module.exports ={
    routes : router
}
