import React from "react";
import FoldersContainer from "./FoldersContainer.jsx";
import NotesContainer from "./NotesContainer.jsx";

const MainContainer = () => {
  return (
    <div id="mainContainer">
      <FoldersContainer />
      <NotesContainer />
    </div>
  );
};

export default MainContainer;
