import NoteTab from "../components/NoteTab.jsx";
import React from "react";

const NoteTabContainer = (props) => {
  const { noteList, createNewNote } = props;

  const notes = [];
  for (let i = 0; i < noteList.length; i++) {
    notes.push(<NoteTab currentNote={noteList[i]} />);
  }

  // const populateDocument = async (id) => {
  //   const note = await models.Note.find({ _id: id });

  //   document.getElementById("textArea").value = note.entriesList[0].entryNote;
  // };

  //create new doc in db
  const createNote = (notesTitle, noteId) => {
    console.log("title", JSON.stringify(notesTitle));
    fetch("/note/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ notesTitle, noteId }),
    })
      // .then((resp) => resp.json())
      .then((data) => {
        console.log("noteId", noteId);
        console.log("data", data);
      })
      .catch((err) => console.log("CreateNote fetch /note: ERROR ", err));
  };

  return (
    <div id="noteTabContainer">
      <h2>Notes</h2>
      <input id="noteTitleInput" type="text"></input>
      <button
        id="createNoteButton"
        onClick={() => {
          //db POST req func
          createNote(
            document.getElementById("noteTitleInput").value,
            noteList.length + 1
          );
          //redux dispatch func
          createNewNote(document.getElementById("noteTitleInput").value);
        }}
      >
        Add
      </button>
      {notes}
    </div>
  );
};

export default NoteTabContainer;
