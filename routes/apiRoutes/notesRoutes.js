const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const {createNewNotes, readNotes, deleteNotes, validateNote} = require('../../lib/notes');
const {notes} = require('../../data/db.json');
const shortId = require('shortid');

router.get('/notes', (req, res) => {
    const data = readNotes(notes);
    res.json(data);
});

router.post('/notes', (req, res) => {
    req.body.id = shortId.generate();

    if(!validateNote(req.body)){
        res.status(400).send('The note is not properly formatted');
    } else {
        const note = createNewNotes(req.body, notes);
        res.json(note);
    }    
});

router.delete('/notes', (req, res) => {
    console.log(req.body.id);
    res.status(200).send('Note deleted');
});

module.exports = router;