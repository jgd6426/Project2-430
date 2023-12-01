const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    set: setName,
  },
  due: {
    type: String,
    trim: true,
    required: false,
  },
  info: {
    type: String,
    required: false,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

NoteSchema.statics.toAPI = (doc) => ({
  title: doc.title,
  due: doc.due,
  info: doc.info,
});

const NoteModel = mongoose.model('Note', NoteSchema);
module.exports = NoteModel;
