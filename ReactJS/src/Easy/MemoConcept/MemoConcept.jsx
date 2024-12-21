import { useState, memo } from "react";
import MemoChild1 from "./MemoChild1";
import MemoChild2 from "./MemoChaild2";

const MemoConcept = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  return (
    <>
      <main>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br /> <br />
        <input
          type="text"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <span>{user}</span>
        <MemoChild1 count={count} />
        <MemoChild2 />
      </main>
    </>
  );
};

export default MemoConcept;
