import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/action.js";

import NoteTabContainer from "./NoteTabContainer.jsx";
import DocumentContainer from "./DocumentContainer.jsx";

const mapStateToProps = (state) => ({
  noteList: state.notes.noteList,
});

const mapDispatchToProps = (dispatch) => ({
  populateNote: (notes) => {
    return dispatch(actions.populateNoteActionCreator(notes));
  },
  createNewNote: (title) => {
    return dispatch(actions.createNoteActionCreator(title));
  },
});

const NotesContainer = (props) => {
  const { noteList, createNewNote, populateNote } = props;

  useEffect(() => {
    fetch("/note/")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .then((data) => populateNote(data))
      .catch((err) => console.log(err));
  }, []);

  console.log("props", props);
  return (
    <div id="notesContainer">
      <NoteTabContainer noteList={noteList} createNewNote={createNewNote} />
      <DocumentContainer />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);
