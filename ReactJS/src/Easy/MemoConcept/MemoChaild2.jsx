import React from "react";
import { memo } from "react";

const MemoChild2 = memo(() => {
  console.log("MemoChild2");

  return (
    <div>
      <h2>Memo Child-01</h2>
    </div>
  );
});

export default MemoChild2;
