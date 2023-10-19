const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(`url : ${req.url} method: ${req.method}`);

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
     
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>')
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Not found</h1>')
        res.end()
    }
})

server.listen(5000)