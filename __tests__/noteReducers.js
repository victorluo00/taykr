// import noteReducer from "../frontend/reducers/noteReducer.js";
let noteReducer = require("../frontend/reducers/noteReducer.js");

describe("noteReducer", () => {
  let state;
  //before each, create an initial state
  beforeEach(() => {
    state = {
      foldersList: [],
      notesList: [],
      entriesList: [],
    };
  });
  //should return a default state
  describe("default state", () => {
    it("should return a default state when given undefined input", () => {
      expect(noteReducer(undefined, { type: undefined })).toEqual(state);
    });
  });
  //CREATE_NOTE
  describe("CREATE_NOTE", () => {
    //it 'adds a note to noteslist'
    let action = { type: "CREATE_NOTE", payload: "newNote" };
    it("adds note to notesList", () => {
      const newState = noteReducer(state, action);
      expect(newState.notesList.length).toEqual(1);
    });
    //it 'includes anoteList not strictly eqal to the original'
    it("includes a state not strictly equal to the original", () => {
      const newState = noteReducer(state, action);
      expect(newState).not.toBe(state);
    });
  });
  //SET_NOTE
  // describe("SET_NOTE", () => {
  //   state = {
  //     foldersList: [],
  //     notesList: [],
  //     entriesList: [],
  //   }
  //   let action = { type: "SET_NOTE", payload: 'To be or not to be, that is the question.' };
  //   it("entriesList is now set to the contents of the current note", () => {
  //     //it 'entriesList is now set to the contents of the current note'

  //   });
  // });
});
