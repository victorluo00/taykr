/**
 * ************************************
 *
 * @module  noteReducer
 * @author
 * @date
 * @description reducer for noteData
 *
 * ************************************
 */

//define initial state
const initialState = {
  folderList: [],
  noteList: [],
  entriesList: [],
  currentNoteId: 0,
};

//create noteReducer function that takes a state init to initialState, and an action
const noteReducer = (state = initialState, action) => {
  //switch for the action type that's passedin in the action object
  switch (action.type) {
    case "POPULATE_NOTE":
      const noteList = [...action.payload];
      return {
        ...state,
        noteList,
      };
    //check for CREATE_NOTE
    case "CREATE_NOTE":
      let newNote = {
        noteId: state.currentNoteId + 1,
        noteTitle: action.payload,
        notesContent: "",
      };
      let newNoteList = state.noteList.slice();
      newNoteList.push(newNote);
      return { ...state, noteList: newNoteList };
    //check for SET_NOTE
    case "SET_NOTE":
    //default return state
    default: {
      return state;
    }
  }
};

module.exports = noteReducer;
// export default noteReducer;
