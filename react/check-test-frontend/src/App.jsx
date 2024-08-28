import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  let myName = "Check";
  return (
    <>
      <Greeting name={myName} />
      <Counter />
    </>
  );
}

export default App;
