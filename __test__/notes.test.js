const fs = require('fs');
const {createNewNotes, readNotes, deleteNotes, validateNote, isFound} = require('../lib/notes');

jest.mock('fs');

test('creates new notes', () => {
    const note = {
        id : '3',
        title: 'Note title',
        text: 'Note text'
    }

    const notesArray = [
        {
            id:'1',
            title:'Note title 1',
            text:'Note text 1'
        },
        {
            id: '2',
            title: 'Note title 2',
            text: 'Note text 2'
        }
    ]

    const result = createNewNotes(note, notesArray);

    expect(result.id).toBe('3');
    expect(result.title).toBe('Note title');
    expect(result.text).toBe('Note text');
});

test('reads notes', () => {
    const note = {
        id : '3',
        title: 'Note title',
        text: 'Note text'
    }

    const result = readNotes(note);

    expect(result.id).toBe('3');
    expect(result.title).toBe('Note title');
    expect(result.text).toBe('Note text');
});

test('deleted notes', () => {
    const notesArray = [
        {
            id:'1',
            title:'Note title 1',
            text:'Note text 1'
        },
        {
            id: '2',
            title: 'Note title 2',
            text: 'Note text 2'
        }
    ]

    const result = deleteNotes('2', notesArray);

    const filteredResult = result.filter(note => note.id === '2');

    expect(filteredResult.length).toEqual(0);
});

test('validates note', () => {
    const note1 = {
        text: 'Note text'
    }

    const note2 = {
        title: 'Note title'
    }

    const note3 = {
        title: 'Note title',
        text: 'Note text'
    }

    const result1 = validateNote(note1);
    const result2 = validateNote(note2);
    const result3 = validateNote(note3);

    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(true);
});

test('checks if an ID exists in the database', () => {
    const noteExists = {
        id : '1',
        title: 'Note title',
        text: 'Note text'
    }

    const noteNotExist = {
        id : '5',
        title: 'Note title',
        text: 'Note text'
    }

    const notesArray = [
        {
            id:'1',
            title:'Note title 1',
            text:'Note text 1'
        },
        {
            id: '2',
            title: 'Note title 2',
            text: 'Note text 2'
        }
    ]

    const resultExist = isFound(noteExists.id, notesArray);
    const resultNotExist = isFound(noteNotExist.id, notesArray);

    expect(resultExist).toEqual(true);
    expect(resultNotExist).toEqual(false);
});