const fs = require('fs');
const http = require('http')

http
    .createServer(function(req, res){
        // const read = fs.readFileSync('./contents/writeBigFile.txt', 'utf8')
        // res.end(read)

        // this will efficiently reduce the amount of data sent over the browser by sending them as data chunks
        const fileStream = fs.createReadStream('./contents/writeBigFile.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res);
        })

        fileStream.on('error', (error) => {
            res.end(error)
        })
    })
    .listen(5000)
