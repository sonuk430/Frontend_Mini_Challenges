import { useState } from "react";
import styles from "./TrafficLights.module.css";

const TrafficLightData = [
  { lightColor: "red", time: 3000 },
  { lightColor: "yellow", time: 2000 },
  { lightColor: "green", time: 5000 },
];

const TrafficLights = ({ numberOfLight }) => {
  const [traffic, setTraffic] = useState(TrafficLightData);

  return (
    <div className={styles.trafficWrapper}>
      <div className={styles.traffic}>
        {new Array(numberOfLight).fill().map((_, index) => (
          <Light key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrafficLights;

// Light Component

function Light({ light }) {
  return (
    <>
      <div className={styles.box}>{light}</div>
    </>
  );
}
