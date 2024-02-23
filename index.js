const express = require("express");
const {engine} = require('express-handlebars')
const path = require('path')
const app = express();
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use('/', require(path.join(__dirname, 'routes/stocks.js')))

app.listen(port, ()=>{
    console.log(`My Tradinger app is running at port ${port}`);
})