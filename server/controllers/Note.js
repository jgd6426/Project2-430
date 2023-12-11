const models = require('../models');

const { Note } = models;

/* Render the app.handlebars page */
const makerPage = async (req, res) => res.render('app');

const makeNote = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: 'Title is required!' });
  }

  const noteData = {
    title: req.body.title,
    due: req.body.due,
    info: req.body.info,
    owner: req.session.account._id,
  };

  try {
    const newNote = new Note(noteData);
    await newNote.save();
    return res.status(201).json({ title: newNote.title, due: newNote.due, info: newNote.info });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: "Sorry! You can't have duplicate notes." });
    }

    return res.status(500).json({ error: 'An error occured creating note.' });
  }
};

/* Retrieve all of the notes belonging to the logged in user.
  Allows us to get JSON responses of Notes for a user, to then
  allow the client app to update dynamically using React.
  Able to dynamically grab updates from the server and immediately
  update the UI on screen. */
const getNotes = async (req, res) => {
  try {
    const query = { owner: req.session.account._id };
    const docs = await Note.find(query).select('title due info').lean().exec();

    return res.json({ notes: docs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Error retrieving notes.' });
  }
};

const deleteNote = async (req, res) => {
  const query = { owner: req.session.account._id };

  try {
    return Note.deleteOne(query, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error deleting note.' });
      }
      return res.status(200).json({ message: 'Note deleted successfully.' });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Error deleting note.' });
  }
};

module.exports = {
  makerPage,
  makeNote,
  getNotes,
  deleteNote,
};
