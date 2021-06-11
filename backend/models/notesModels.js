const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://victorluo00:codesmith@cluster0.expih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//mongoose.connect passing in uri and options
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "Taykr",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log("err", err));

const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
  name: String,
  totalNotes: Number,
  totalFolders: Number,
  foldersList: [{ type: Schema.Types.ObjectId, ref: "folder" }],
});

const User = mongoose.model("user", userSchema);

const folderSchema = new Schema({
  folderTitle: String,
  totalFolderNotes: Number,
  notesList: [{ type: Schema.Types.ObjectId, ref: "note" }],
});

const Folder = mongoose.model("folder", folderSchema);

const noteSchema = new Schema({
  notesTitle: String,
  noteId: Number,
  noteContent: String,
  entriesList: [{ type: Schema.Types.ObjectId, ref: "entry" }],
});

const Note = mongoose.model("note", noteSchema);

const entrySchema = new Schema({
  entryNote: String,
  entryImportance: String,
  entryQuestion: String,
});

const Entry = mongoose.model("entry", entrySchema);

module.exports = {
  User,
  Folder,
  Note,
  Entry,
};
