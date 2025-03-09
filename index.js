const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');


const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});