import React from "react";
import { names } from "../api/names";

const NamesList = () => {
  return (
    <div>
      <h2>List Rendering</h2>
      <ul>
        {names.map((pers, index) => (
          <li key={index}>{pers}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
