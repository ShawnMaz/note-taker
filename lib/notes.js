const path = require('path');
const fs = require('fs');

function writeToFile(data) {
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: data }, null, 2)
    );
}

function validateNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }

    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}

function createNewNotes(note, notesArray) {
    notesArray.push(note);
    writeToFile(notesArray);
    return note;
}

function readNotes(notesArray) {
    return notesArray;
}

function deleteNotes(id, notesArray) {
    data = notesArray.filter(note => note.id !== id);
    writeToFile(data);
    return data;
}

module.exports = {
    createNewNotes,
    readNotes,
    deleteNotes
};
