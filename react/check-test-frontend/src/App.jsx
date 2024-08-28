import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import NamesList from "./components/NamesList ";

function App() {
  let myName = "Check";
  return (
    <>
      <Greeting name={myName} />
      <Counter />
      <NamesList />
    </>
  );
}

export default App;
