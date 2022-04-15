// Lisätään tarpeelliset moduulit.
const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Määritetään ohjelman kansioiden käytön
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use(express.static('public'))

//Käynistetään ohjelma
app.listen(PORT, () => {
    console.log('listening on port 3000')
});
