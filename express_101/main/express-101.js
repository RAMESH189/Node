const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('404 Page')
})

const PORT = 5000;
app.listen(PORT, () => {console.log(`server is listening on port ${PORT}...`)})