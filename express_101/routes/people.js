const express = require('express');
const router = express.Router();
const {
    getPeople,
    deletePerson,
    updatePerson,
    addPerson,
    addPersonPostman
} = require('../controller/people')


router.get('/', getPeople);
router.post('/', addPerson);
router.post('/postman', addPersonPostman);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;