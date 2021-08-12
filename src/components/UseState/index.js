import logo from "../../logo.svg";
import { useState } from "react";

function UseState() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? "reverse" : "";

  function handleClick() {
    setReverse(!reverse);
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>Contador {counter}</h1>
        <button onClick={handleClick}>Reverse {reverseClass}</button>
      </header>
    </div>
  );
}

export default UseState;
