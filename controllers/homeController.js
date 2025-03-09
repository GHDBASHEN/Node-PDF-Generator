const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');

const home = (req, res, next) => {
    res.render('home');
}

module.exports = {
    home
}
