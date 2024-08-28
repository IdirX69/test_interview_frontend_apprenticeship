import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  let myName = "Check";
  return (
    <>
      <Greeting name={myName} />
    </>
  );
}

export default App;
