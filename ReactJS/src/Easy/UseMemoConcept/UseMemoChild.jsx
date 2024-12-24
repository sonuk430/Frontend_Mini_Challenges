import { useMemo, useState } from "react";

const UseMemoChild = ({ count }) => {
  const [user, setUser] = useState("");

  const usemmoChildSeHe = useMemo(
    function usemmoChildSeHe() {
      console.log("usemmoChildSeHe");
    },
    [count]
  );

  function handleInputChange(e) {
    setUser(e.target.value);
  }

  usemmoChildSeHe;

  return (
    <div>
      <div>UseMemoChild {count}</div>
      <input value={user} type="text" onChange={handleInputChange} />
      <span>{user}</span>
    </div>
  );
};

export default UseMemoChild;
