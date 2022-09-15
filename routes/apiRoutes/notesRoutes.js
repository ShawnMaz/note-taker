const router = require('express').Router();
const {createNewNotes, readNotes, deleteNotes, validateNote, isFound} = require('../../lib/notes');
const shortId = require('shortid');

router.get('/notes', (req, res) => {
    const data = readNotes();
    res.json(data);
});

router.post('/notes', (req, res) => {
    req.body.id = shortId.generate();

    if(!validateNote(req.body)){
        res.status(400).send('The note is not properly formatted');
    } else {
        const note = createNewNotes(req.body);
        res.json(note);
    }    
});

router.delete('/notes/:id', (req, res) => {
    if(isFound(req.params.id)){
        deleteNotes(req.params.id);
        res.status(200).send('Note deleted');
    } else {
        res.status(400).send('Unable to delete the requested data');
    }
    
});

module.exports = router;