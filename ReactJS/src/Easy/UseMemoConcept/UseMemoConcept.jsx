import { useMemo, useState } from "react";
import UseMemoChild from "./UseMemoChild";

const UseMemoConcept = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  const multiply = useMemo(function multiply() {
    console.log("Chala me");
  }, []);

  return (
    <div>
      <h2>UseMemoConcept</h2>

      <h2>Count: {count} </h2>
      <span>Multiply: {multiply}</span>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {/* <UseMemoChild /> */}
      <UseMemoChild count={count} />
    </div>
  );
};

export default UseMemoConcept;
