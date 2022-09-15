const fs = require('fs');
const {createNewNotes, readNotes, deleteNotes} = require('../lib/notes');

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