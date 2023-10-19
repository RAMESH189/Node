const express = require('express');
const app = express();
const path = require('path');

// setup all required resources using public folder.
// these resources in the pubic folder are static assets - They do not change based on user input or other dynamic behaviour.
app.use(express.static('./public'))

// index.html can also be moved inside the public folder since it is also a static asset.
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
app.get('*', (req, res) => {
    res.status(404).send('Not Found')
})


app.listen(5000, console.log('server started.....'));