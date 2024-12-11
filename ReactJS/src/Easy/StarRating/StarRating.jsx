import styles from "./StarRating.module.css";

import { useState } from "react";

const StarRating = ({ starSize = 3 }) => {
  const [starBox, setStarBox] = useState(new Array(starSize).fill("☆"));
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <>
      <div className={styles.starDiv}>
        {starBox.map((star, index) => (
          <span
            key={index}
            className={
              (hoverValue == 0 && index < starValue) || index < hoverValue
                ? styles.gold
                : ""
            }
            onClick={() => {
              setStarValue(index + 1);
            }}
            onMouseEnter={() => {
              setHoverValue(index + 1);
            }}
            onMouseLeave={() => {
              setHoverValue(0);
            }}
          >
            {star}
          </span>
        ))}

        <div>
          <span>Star Rating: {starValue}</span>
        </div>
      </div>
    </>
  );
};

export default StarRating;

// ☆☆☆☆☆
