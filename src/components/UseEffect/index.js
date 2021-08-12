import { useState, useEffect } from "react";

const eventFn = () => {
  console.log("h1 foi clicado");
};

function UseEffect() {
  const [counter, setCounter] = useState(0);

  //componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  //componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
    document.querySelector("h1")?.addEventListener("click", eventFn);

    //componentWillUnmount
    return () => {
      document.querySelector("h1")?.removeEventListener("click", eventFn);
    };
  }, []);

  //com dependencia
  useEffect(() => {
    console.log("counter update: " + counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default UseEffect;
