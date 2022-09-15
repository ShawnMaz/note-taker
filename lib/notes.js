const path = require('path');
const {notesData} = require('../data/db.json');
const fs = require('fs');

function getNotes() {
    return notesData;
}

function writeToFile(data){
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({notes:data}, null, 2)
    );
}

function createNewNotes(note){
    notesData.push(note);
    writeToFile('notes', notesData);
    return note;
}

function deleteNotes(id){
    data = notesData.filter(note => note.id !== id);
    writeToFile(data);
    return id;
}

module.exports = {
    getNotes, 
    createNewNotes,
    deleteNotes
};
