
// module.exports = router;
const express = require('express');
const router = express.Router();
const store = require('../db/store');

// GET "/api/notes" responds with all notes from the database
router.get('/notes', async (req, res) => {
  try {
    // Retrieve all notes from the store
    const notes = await store.getNotes();
    
    // Respond with the retrieved notes as JSON
    res.json(notes);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error and the error message
    res.status(500).json(err);
  }
});

// POST "/api/notes" adds a new note to the database
router.post('/notes', async (req, res) => {
  try {
    // Add a new note to the store using the request body
    const note = await store.addNote(req.body);
    
    // Respond with the newly created note as JSON
    res.json(note);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error and the error message
    res.status(500).json(err);
  }
});

module.exports = router;
