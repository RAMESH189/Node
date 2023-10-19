// const fs = require('fs');

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date()
    const content = `method: ${method}, url: ${url}, time: ${time}`;
    console.log(content);
    // fs.writeFile('./log.txt', content, (err) => {
    //     if(err) {console.error(err)}
    // })
    next()
}

module.exports = logger;