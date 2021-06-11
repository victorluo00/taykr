import React from "react";
import ToolBar from "../components/ToolBar.jsx";

const DocumentContainer = () => {
  return (
    <div id="documentContainer">
      <h3 id="notesTitle">Select a note</h3>
      <ToolBar />
      <textarea id="textArea"></textarea>
    </div>
  );
};

export default DocumentContainer;
