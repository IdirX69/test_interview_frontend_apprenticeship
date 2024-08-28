import React, { useState } from "react";
import { names } from "../api/names";

const NamesList = () => {
  const [namesList, setNamesList] = useState(names);
  const [inputValue, setInputValue] = useState("");
  const addName = () => {
    setNamesList([...namesList, inputValue]);
    setInputValue("");
  };

  return (
    <div className="component-container">
      <h2>List Rendering</h2>
      <ul>
        {namesList.map((pers, index) => (
          <li key={index}>{pers}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addName}>Add</button>
    </div>
  );
};

export default NamesList;
