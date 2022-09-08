import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlightIndicators.module.css';

import {
  Airspeed,
  Altimeter,
  AttitudeIndicator,
  HeadingIndicator,
  TurnCoordinator,
  Variometer
} from 'react-typescript-flight-indicators';

const FlightIndicators = () => (
  <div className={styles.parent}>
    <div className={styles.div1}>
      <HeadingIndicator heading={Math.random() * 360} showBox={false} size="200px" />
    </div>
    <div className={styles.div2}>
      <Airspeed speed={150} showBox={true} size="200px"/>
    </div>
    <div className={styles.div3}>
      <Altimeter altitude={Math.random() * 28000} showBox={false} size="200px"/>
    </div>
    <div className={styles.div4}>
      <AttitudeIndicator roll={0} pitch={0} showBox={false} size="200px" />
    </div>
    <div className={styles.div5}>
      <TurnCoordinator turn={(Math.random() - 0.5) * 120} showBox={false}size="200px" />
    </div>
    <div className={styles.div6}>
      <Variometer vario={1500} showBox={false} size="200px"/>
    </div>
  </div>
);

FlightIndicators.propTypes = {};

FlightIndicators.defaultProps = {};

export default FlightIndicators;
