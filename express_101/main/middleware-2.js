const express = require('express');
const app = express();
// from logger.js
const logger = require('./logger');
const authorize = require('./autherize');
// if a base path is specified as the first argument, (i.e app.use('/api', logger))
// logger will only be available for the routes with that base path.
app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send("Welcome to Home Page")
})
app.get('/about', (req, res) => {
    res.send("Welcome to about Page")
})
app.get('/about/pruducts', (req, res) => {
    console.log(req.user);
    res.send("Welcome to product Page")
})
app.get('/about/items', (req, res) => {
    res.send("Welcome to items Page")
})
app.get('/about/items/item1', (req, res) => {
    res.send("Item 1")
})

app.listen(5000,
    () => {
        console.log('server running on port 5000..')
    })