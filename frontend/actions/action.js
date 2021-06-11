//NEW_NOTE action that creates new note in notesList
//{type: "NEW_NOTE", payload: <noteTitle>}
//SET_NOTE action that sets the text display to the current note
//{type: "SET_NOTE", payload: <contents of note>}

export const populateNoteActionCreator = (notes) => ({
  type: "POPULATE_NOTE",
  payload: notes,
});

export const createNoteActionCreator = (noteTitle) => ({
  type: "CREATE_NOTE",
  payload: noteTitle,
});

export const setNoteActionCreator = (noteContent) => ({
  type: "SET_NOTE",
  payload: noteContent,
});
