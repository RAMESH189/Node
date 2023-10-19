const express = require('express');
// const fs = require('fs');
const app = express()

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date()
    const content = `method: ${method}, url: ${url}, time: ${time}`;
    console.log(content)
    // const content = `method: ${method}, url: ${url}, time: ${time}`;
    // fs.writeFile('./log.txt', content, (err) => {
    //      if(err) {console.error(err)}
    // })
    next()
}

app.get('/', logger , (req, res) => {
    res.send("Welcome to Home Page")
})
app.get('/about', logger, (req, res) => {
    res.send("Welcome to about Page")
})


app.listen(5000, () => {console.log('server running on port 5000..')})