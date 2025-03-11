const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const data = require('../helpers/data');

const homeview = (req, res, next) => {
    res.render('home');
}

const generatePdf = async (req, res, next) => {
    const selectedProduct = req.query.product; // Get the selected product from the query

    const html = fs.readFileSync(path.join(__dirname, '../views/template.html'), 'utf-8');
    const filename = Math.random() + '_doc' + '.pdf';
    let array = [];

    const filteredData = data.filter(d => d.name === selectedProduct); // Filter data based on selected product
    filteredData.forEach(d => {

        const prod = {
            name: d.name,
            description: d.description,
            unit: d.unit,
            quantity: d.quantity,
            price: d.price,
            total: d.quantity * d.price,
            imgurl: d.imgurl
        }
        array.push(prod);
    });

    let subtotal = 0;
    array.forEach(i => {
        subtotal += i.total;
    });
    const tax = (subtotal * 20) / 100;
    const grandtotal = subtotal - tax;
    const obj = {
        prodlist: array,
        subtotal: subtotal,
        tax: tax,
        gtotal: grandtotal
    };

    // Use Puppeteer to generate PDF
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({
        path: './docs/' + filename,
        format: 'A4',
        printBackground: true
    });
    await browser.close();

    const filepath = 'http://localhost:3000/docs/' + filename;

    res.render('download', {
        path: filepath
    });
};

module.exports = {
    homeview,
    generatePdf
};
