const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const {createNewNotes, readNotes, deleteNotes} = require('../../lib/notes');
const {notes} = require('../../data/db.json');
const shortId = require('shortid');

router.get('/notes', (req, res) => {
    const data = readNotes(notes);
    res.json(data);
});

router.post('/notes', (req, res) => {
    req.body.id = shortId.generate();
    
    const note = createNewNotes(req.body, notes);
    res.json(note);
});

module.exports = router;