const { Router } = require('express');
const { getNote, getNotes, createNote, updateNote, deleteNote } = require('../controllers/notes.controller')
const router = Router();

router.route('/')
    .get(getNotes)
    .post(createNote)
router.route('/:id')
     .get(getNote)
     .put(updateNote)
     .delete(deleteNote)

module.exports = router;