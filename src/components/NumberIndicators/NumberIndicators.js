import React from "react";
import PropTypes from "prop-types";
import styles from './NumberIndicators.module.css';

import { Clock } from "../../shared/Clock/Clock";
import Toggle from "../../shared/ToggleBtn/ToggleBtn"

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.t1}><Toggle title="Toggle1"/></div>
      <div className={styles.t2}><Toggle title="Toggle"/></div>
      <div className={styles.t3}><Toggle title="Toggle"/></div>
      <div className={styles.t4}><Toggle title="Toggle"/></div>
      <div className={styles.t5}><Toggle title="Toggle"/></div>
      <div className={styles.t6}><Toggle title="Toggle"/></div>
      <div className={styles.t7}><Toggle title="Toggle"/></div>
      <div className={styles.t8}><Toggle title="Toggle"/></div>
      <div className={styles.t9}><Toggle title="Toggle"/></div>
      <div className={styles.esc}></div>
      <div className={styles.flap}></div>
      <div className={styles.groundDistance}></div>
      <div className={styles.pot2}></div>
      <div className={styles.pot3}></div>
      <div className={styles.pitch}></div>
      <div className={styles.row}></div>
      <div className={styles.rudder}></div>
      <div className={styles.battery}></div>
      <div className={styles.satellites}></div>
      <div className={styles.temperature}></div>
      <div className={styles.humidity}></div>
      <div className={styles.clock}><Clock/></div>
    </div>
  );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
