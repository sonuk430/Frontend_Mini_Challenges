import { useCallback, useState } from "react";
import ChildA from "./ChildA";

const UseCallBackConcept = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  function handleAddition() {
    setCount(count + 1);
  }

  const handleInputChange = useCallback(
    function (e) {
      setUser(e.target.value);
    },
    [user]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAddition}>Addition</button>
      <ChildA handleInputChange={handleInputChange} user={user} />
    </div>
  );
};

export default UseCallBackConcept;
