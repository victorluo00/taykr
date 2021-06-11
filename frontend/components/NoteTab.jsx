import React from "react";

const NoteTab = (props) => {
  const { currentNote } = props;
  const setNote = () => {
    fetch(`/note/${currentNote._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data._doc);
        return data._doc;
      })
      .then((currentNote) => {
        document.getElementById("textArea").value =
          // currentNote.entriesList[0].entryNote;
          currentNote.noteContent;
        document.getElementById("notesTitle").innerHTML =
          currentNote.notesTitle;
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  return (
    <div id="noteTab" onClick={() => setNote()}>
      <h3>{currentNote.notesTitle}</h3>
    </div>
  );
};

export default NoteTab;
