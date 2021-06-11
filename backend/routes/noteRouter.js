const express = require("express");
const noteController = require("../controllers/noteController.js");
const router = express.Router();

router.get("/", noteController.getNotes, (req, res) => {
  console.log("got here");
  return res.status(200).json([...res.locals.notes]);
});

router.post("/", noteController.createNote, (req, res) => {
  return res.status(200).json({});
});

router.get("/:id", noteController.setNote, (req, res) => {
  return res.status(200).json({ ...res.locals.currentNote });
});

router.put("/:id", noteController.saveNote, (req, res) => {
  return res.status(200).json({});
});

module.exports = router;
