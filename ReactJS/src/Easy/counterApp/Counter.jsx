import { useState } from "react";
import styles from "./Counter.module.css";
import { useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [defaultVal, setDefaultVal] = useState(1);

  function handleDecrement() {
    setCount((prev) => prev - Number(defaultVal));
  }
  function handleIncrement() {
    setCount((prev) => prev + Number(defaultVal));
  }

  function handleInputChange(e) {
    const inputVal = e.target.value;
    if (inputVal === "" || isNaN(Number(inputVal))) {
      e.target.value = "";
    } else {
      setDefaultVal(inputVal);
    }
  }

  const handleReset = () => {
    setCount(0);
    setDefaultVal(1);
  };

  return (
    <>
      <div className={styles.counterApp}>
        <div className={styles.counter__wrapper}>
          <h1>Count: {count}</h1>
          <div className={styles.btn}>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className={styles.inputVal}>
            <span>Increment/Decrement by</span>
            <input
              value={defaultVal}
              type="text"
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleReset} className={styles.resetBtn}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
