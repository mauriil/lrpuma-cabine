import React from "react";
import styles from "./FlightIndicators.module.css";

import {
  Airspeed,
  Altimeter,
  AttitudeIndicator,
  HeadingIndicator,
  TurnCoordinator,
  Variometer,
} from "react-typescript-flight-indicators";

function FlightIndicators(props) {
  console.log("🚀 ~ file: FlightIndicators.js ~ line 14 ~ FlightIndicators ~ props", props)
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <HeadingIndicator
          heading={parseInt(props.FlightIndicatorsNumbers.course)}
          showBox={false}
          size="200px"
        />
      </div>
      <div className={styles.div2}>
        <Airspeed speed={parseInt(props.FlightIndicatorsNumbers.speed)} showBox={true} size="200px" />
      </div>
      <div className={styles.div3}>
        <Altimeter
          altitude={parseInt(props.FlightIndicatorsNumbers.altitude)}
          showBox={false}
          size="200px"
        />
      </div>
      <div className={styles.div4}>
        <AttitudeIndicator roll={parseFloat(props.FlightIndicatorsNumbers.gyroX)} pitch={parseFloat(props.FlightIndicatorsNumbers.gyroY)} showBox={false} size="200px" />
      </div>
      <div className={styles.div5}>
        <TurnCoordinator
          turn={(Math.random() - 0.5) * 120}
          showBox={false}
          size="200px"
        />
      </div>
      <div className={styles.div6}>
        <Variometer vario={1500} showBox={false} size="200px" />
      </div>
    </div>
  );
}

export default FlightIndicators;
