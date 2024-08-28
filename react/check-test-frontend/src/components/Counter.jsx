import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [auto, setAuto] = useState(false);
  const [action, setAction] = useState("increment" | "decrement" | false);
  const [intervalDelay, setIntervalDelay] = useState(1000);

  const incrementCount = () => {
    setAction("increment");
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setAction("decrement");
    setCounter(counter - 1);
  };

  //Style

  const decrementButtonStyle =
    auto && action === "decrement" ? { border: "1px solid white" } : {};

  const incrementButtonStyle =
    auto && action === "increment" ? { border: "1px solid white" } : {};

  const buttonAutoStyle = auto
    ? { border: "1px solid white" }
    : { border: "1px solid transparent" };

  //

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(() => {
        action === "increment" && setCounter((prevCounter) => prevCounter + 1);
        action === "decrement" && setCounter((prevCounter) => prevCounter - 1);
      }, intervalDelay);
    } else if (!auto && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [auto, action, intervalDelay]);

  const toggleAutoIncrement = () => {
    setAuto(!auto);
  };

  return (
    <div className="component-container">
      <h2>Counter</h2>
      <p>Value : {counter}</p>
      <div>
        <button style={decrementButtonStyle} onClick={decrementCount}>
          -
        </button>
        <button style={incrementButtonStyle} onClick={incrementCount}>
          +
        </button>
      </div>
      <button style={buttonAutoStyle} onClick={toggleAutoIncrement}>
        Auto {auto && action !== 0 ? action : ""}
      </button>
      {auto && (
        <>
          <span>Interval</span>
          <span>{intervalDelay / 1000}s</span>
          <input
            type="range"
            min="300"
            max="2000"
            value={intervalDelay}
            onChange={(e) => setIntervalDelay(e.target.value)}
          />
        </>
      )}
    </div>
  );
};

export default Counter;
