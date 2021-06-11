const models = require("../models/notesModels.js");

const noteController = {};

noteController.createNote = (req, res, next) => {
  try {
    models.Note.create(
      {
        notesTitle: req.body.notesTitle,
        noteId: req.body.noteId,
        noteContent: "",
        entriesList: [],
      },
      (err) => {
        console.log(err);
      }
    );
    console.log("created Note");
    next();
  } catch (err) {
    next({
      log: "ERROR from noteController.createNote",
      message: { err: `ERROR: ${err}` },
    });
  }
};

noteController.getNotes = async (req, res, next) => {
  try {
    const notes = await models.Note.find({});
    res.locals.notes = notes;
    next();
  } catch (err) {
    next({
      log: "ERROR from noteController.getNotes",
      message: { err: `ERROR: ${err}` },
    });
  }
};

noteController.setNote = async (req, res, next) => {
  try {
    const id = req.params.id;
    const currentNote = await models.Note.find({ _id: id });
    res.locals.currentNote = currentNote[0];
    console.log("res", res.locals.currentNote);
    next();
  } catch (err) {
    next({
      log: "ERROR from noteController.setNotes",
      message: { err: `ERROR: ${err}` },
    });
  }
};

noteController.saveNote = async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    const id = req.params.id;
    const newNote = await models.Note.updateOne(
      { notesTitle: id },
      { noteContent: req.body.value }
    );
    next();
  } catch (err) {
    next({
      log: "ERROR from noteController.saveNote",
      message: { err: `ERROR: ${err}` },
    });
  }
};

module.exports = noteController;
