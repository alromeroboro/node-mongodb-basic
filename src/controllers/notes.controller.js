const notesCtrl = {};

const { request } = require('express');
const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    
    const { title, content, date, author } = req.body
    const  newNote = new Note ({
        title,
        content,
        date,
        author
    })
    await newNote.save()
        .catch(err => console.log(err.message));
    res.json({ message: "Note saved" })
};

notesCtrl.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, date, author } = req.body
    const updatedNote = {
        title,
        content,
        date,
        author
    }
    console.log(updatedNote);
    await Note.findByIdAndUpdate(id, updatedNote) 
        .catch(err => console.log(err.message));   
    res.json({ message: "Note updated" });
} 

notesCtrl.deleteNote = async (req, res) => {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.json({ message: "Note deleted" });
} 

notesCtrl.getNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);
    res.json(note);
}

module.exports = notesCtrl;