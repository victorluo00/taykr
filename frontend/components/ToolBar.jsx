import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const ToolBar = () => {
  const bold = () =>
    document.getElementById("textArea").style.fontWeight === "bold"
      ? (document.getElementById("textArea").style.fontWeight = "normal")
      : (document.getElementById("textArea").style.fontWeight = "bold");
  const italicize = () =>
    document.getElementById("textArea").style.fontStyle === "italic"
      ? (document.getElementById("textArea").style.fontStyle = "normal")
      : (document.getElementById("textArea").style.fontStyle = "italic");
  // const changeFont = (font) => {
  //   if (document.getElementById("textArea").style.fontFamily !== font) {
  //     document.getElementById("textArea").style.fontFamily = font;
  //   }
  // };
  const align = (align) => {
    if (document.getElementById("textArea").style.textAlign !== align) {
      document.getElementById("textArea").style.textAlign = align;
      console.log(document.getElementById("textArea").style.textAlign);
    }
  };

  const save = async (noteTitle) => {
    const value = document.getElementById("textArea").value;
    await fetch(`/note/${noteTitle}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({ value }),
    }).then((res) => console.log(res));
  };

  return (
    <div id="toolbar">
      <button onClick={bold}>Bold</button>
      <button onClick={italicize}>Italicize</button>
      <select>
        <option>Arial</option>
        <option>Times New Roman</option>
        <option>Montserrat</option>
      </select>
      <button onClick={() => align("left")}>Left Align</button>
      <button onClick={() => align("center")}>Center</button>
      <button onClick={() => align("right")}>Right Align</button>
      <button
        id="saveButton"
        onClick={() => save(document.getElementById("saveInput").value)}
      >
        Save
      </button>
      <input id="saveInput" type="text"></input>
    </div>
  );
};

export default ToolBar;
