const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const path = require('path');
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use(express.static('public'))


app.listen(3000)
console.log('listening on port 3000')