const express = require('express');
const {homeview, generatePdf}  = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeview);
router.get('/download', generatePdf);

router.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

module.exports = {

    routes: router
}
