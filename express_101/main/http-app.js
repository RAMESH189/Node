//run all the code from app.js - see package.json scripts
const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./navbar-app/index.html');
const HomePageStyle = fs.readFileSync('./navbar-app/styles.css');
const HomePageLogic = fs.readFileSync('./navbar-app/browser-app.js');
const homeImage = fs.readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(`url : ${url} method: ${req.method}`);

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
     
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>About page</h1>')
        res.end()
    }
    // style
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(HomePageStyle)
        res.end()
    }
    // toggle    
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(HomePageLogic)
        res.end()
    }
    // logo  
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Not found</h1>')
        res.end()
    }
})

server.listen(5000)