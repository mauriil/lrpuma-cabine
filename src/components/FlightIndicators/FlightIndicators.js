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
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <HeadingIndicator
          heading={parseInt(props.FlightIndicatorsNumbers.course)}
          showBox={true}
          size="200px"
        />
      </div>
      <div className={styles.div2}>
        <Airspeed speed={parseInt(props.FlightIndicatorsNumbers.speed)} showBox={true} size="200px" />
      </div>
      <div className={styles.div3}>
        <Altimeter
          altitude={parseInt(props.FlightIndicatorsNumbers.altitude)}
          showBox={true}
          size="200px"
        />
      </div>
      <div className={styles.div4}>
        <AttitudeIndicator roll={parseFloat(props.FlightIndicatorsNumbers.gyroX)} pitch={parseFloat(props.FlightIndicatorsNumbers.gyroY)} showBox={true} size="200px" />
      </div>
      <div className={styles.div5}>
        <TurnCoordinator
          turn={parseFloat(props.TurnCoordinator)}
          showBox={true}
          size="200px"
        />
      </div>
      <div className={styles.div6}>
        <Variometer vario={parseFloat(props.Variometer)} showBox={true} size="200px" />
      </div>
    </div>
  );
}

export default FlightIndicators;
