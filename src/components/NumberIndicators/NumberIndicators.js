import React from "react";
import PropTypes from "prop-types";
import styles from './NumberIndicators.module.css';

import { Clock } from "../../shared/Clock/Clock";
import Toggle from "../../shared/ToggleBtn/ToggleBtn";
import DigitalNumber from "../../shared/DigitalNumber/DigitalNumber";

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.t1}><Toggle title="Toggle1"/></div>
      <div className={styles.t2}><Toggle title="Toggle2"/></div>
      <div className={styles.t3}><Toggle title="Toggle3"/></div>
      <div className={styles.t4}><Toggle title="Toggle4"/></div>
      <div className={styles.t5}><Toggle title="Toggle5"/></div>
      <div className={styles.t6}><Toggle title="Toggle6"/></div>
      <div className={styles.t7}><Toggle title="Toggle7"/></div>
      <div className={styles.t8}><Toggle title="Toggle8"/></div>
      <div className={styles.t9}><Toggle title="Toggle9"/></div>
      <div className={styles.esc}><DigitalNumber number={1} title="ESC"/></div>
      <div className={styles.flap}><DigitalNumber number={1} title="Flap"/></div>
      <div className={styles.groundDistance}><DigitalNumber number={1} title="Ground"/></div>
      <div className={styles.pot2}><DigitalNumber number={1} title="Pot 2"/></div>
      <div className={styles.pot3}><DigitalNumber number={1} title="Pot 3"/></div>
      <div className={styles.pitch}><DigitalNumber number={1} title="Pitch"/></div>
      <div className={styles.row}><DigitalNumber number={1} title="Row"/></div>
      <div className={styles.rudder}><DigitalNumber number={1} title="Rudder"/></div>
      <div className={styles.battery}><DigitalNumber number={1} title="Batt"/></div>
      <div className={styles.satellites}><DigitalNumber number={7} title="SAT"/></div>
      <div className={styles.temperature}><DigitalNumber number={1} title="Temp"/></div>
      <div className={styles.humidity}><DigitalNumber number={1} title="Hum"/></div>
      <div className={styles.clock}><Clock/></div>
    </div>
  );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
