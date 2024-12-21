import React, { memo } from "react";

const MemoChild1 = memo(({ count }) => {
  console.log("MemoChild1");

  return (
    <div>
      <p>{count}</p>
      <h2>Memo Child-02</h2>
    </div>
  );
});

// const MemoChild1 = ({ count }) => {
//   console.log("MemoChild1");

//   return (
//     <div>
//       <p>{count}</p>
//       <h2>Memo Child-02</h2>
//     </div>
//   );
// };

export default MemoChild1;
