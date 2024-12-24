import { memo } from "react";

const ChildA = ({ handleInputChange, user }) => {
  console.log("Child A");

  return (
    <div>
      <input type="text" value={user} onChange={handleInputChange} />
      <span>{user}</span>
    </div>
  );
};

export default memo(ChildA);
