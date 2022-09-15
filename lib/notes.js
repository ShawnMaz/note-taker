const path = require('path');
const fs = require('fs');

function writeToFile(data) {
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: data }, null, 2)
    );
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }

    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}

function readDatabase(){
    const data = fs.readFileSync(path.join(__dirname,'../data/db.json'), 'utf-8', (err) => {
        if(err){
            console.error(err);
        } 
    });
    const {notes} = JSON.parse(data);
    return notes;
}

function isFound(id, notesArray = readDatabase()){
    const exist = notesArray.filter(element => element.id === id).length;

    if(exist){
        return true;
    } 
    return false;
}

function createNewNotes(note, notesArray = readDatabase()) {
    notesArray.push(note);
    writeToFile(notesArray);
    return note;
}

function readNotes(notes = readDatabase()) {  
    return notes;
}

function deleteNotes(id, notesArray = readDatabase()) {
    data = notesArray.filter(note => note.id !== id);
    writeToFile(data);
    return data;
}

module.exports = {
    createNewNotes,
    readNotes,
    deleteNotes, 
    validateNote, 
    isFound
};
