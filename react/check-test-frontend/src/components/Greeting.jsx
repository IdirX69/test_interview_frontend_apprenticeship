import React, { useState } from "react";

const Greeting = ({ name, setMyName }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (nameToAdd) => {
    setInputValue(nameToAdd);
  };
  const handleClick = () => {
    setMyName(inputValue);
    setInputValue("");
  };
  return (
    <div className="component-container">
      <h1>hello {name !== "" && name} !</h1>

      <input
        type="text"
        placeholder="Change your name"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default Greeting;
