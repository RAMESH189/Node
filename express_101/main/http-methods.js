const express = require('express');
const app = express();
const PORT = 5000;
let { people } = require('./data');

// Middleware to render static items
app.use(express.static('./methods-public'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Middleware to parse json
app.use(express.json())

// get
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})

// post
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    // console.log(req.body);
    if (!name) {
        return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' });
    }
    res.status(201).json({ success: true, person: name });
    
})

app.post('/api/people/postman', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    if (name) {
       return res.send(`Welcome ${name}`).status(200)
    }
    res.status(401).send('Please provide credentilas')
})

// put
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find(person => person.id === Number(id));
    
    if (!person) {
        return res
        .status(404)
        .json({ success: false, msg: `please provide a valid ${id}` })
    }
    const newPerson = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPerson });   
})

// delete
app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const person = people.find(person => person.id === Number(id)); 
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `please provide a valid ${id}` })
    }
    const newPerson = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPerson });
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}....`);
})