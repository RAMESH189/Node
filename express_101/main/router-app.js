const express = require('express');
const app = express();
const PORT = 5000;

const people = require('./routes/people');
const auth = require('./routes/auth')

// Middleware to render static items
app.use(express.static('./methods-public'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Middleware to parse json
app.use(express.json());

// router for /api/people
app.use('/api/people', people);

// router for login
app.use('/login', auth);



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}....`);
})