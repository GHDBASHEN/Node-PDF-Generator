const express = require('express');
const {home} = require('./controllers/homeController.js');


const router = express.Router();

router.get('/', home);



module.exports ={
    routes : router
}
