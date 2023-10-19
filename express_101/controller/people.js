let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const addPerson = (req, res) => {
    const { name } = req.body;
    // console.log(req.body);
    if (!name) {
        return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' });
    }
    res.status(201).json({ success: true, person: name });
}

const addPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find(person => person.id === Number(id)); 
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `please provide a valid ${id}` })
    }
    const newPerson = people.filter((person) => person.id !== Number(id));
    return res.status(200).json({ success: true, data: newPerson });
}

module.exports = {
    getPeople,
    deletePerson,
    updatePerson,
    addPerson,
    addPersonPostman
}