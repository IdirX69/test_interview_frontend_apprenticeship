import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import NamesList from "./components/NamesList ";

function App() {
  const [myName, setMyName] = useState("Check");

  return (
    <>
      <Greeting name={myName} setMyName={setMyName} />
      <Counter />
      <NamesList />
    </>
  );
}

export default App;
