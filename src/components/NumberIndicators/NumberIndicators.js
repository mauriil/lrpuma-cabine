import React from "react";
import PropTypes from "prop-types";
import styles from './NumberIndicators.module.css';

import { Clock } from "../../shared/Clock/Clock";
import Toggle from "../../shared/ToggleBtn/ToggleBtn";
import DigitalNumber from "../../shared/DigitalNumber/DigitalNumber";

function NumberIndicators (props){
  return (
    <div className={styles.container}>
      <div className={styles.t1}><Toggle title="Toggle1" active={props.ToggleStatus[0]} /></div>
      <div className={styles.t2}><Toggle title="Toggle2" active={props.ToggleStatus[1]} /></div>
      <div className={styles.t3}><Toggle title="Toggle3" active={props.ToggleStatus[2]} /></div>
      <div className={styles.t4}><Toggle title="Toggle4" active={props.ToggleStatus[3]} /></div>
      <div className={styles.t5}><Toggle title="Toggle5" active={props.ToggleStatus[4]} /></div>
      <div className={styles.t6}><Toggle title="Toggle6" active={props.ToggleStatus[5]} /></div>
      <div className={styles.t7}><Toggle title="Toggle7" active={props.ToggleStatus[6]} /></div>
      <div className={styles.t8}><Toggle title="Toggle8" active={props.ToggleStatus[7]} /></div>
      <div className={styles.t9}><Toggle title="Toggle9" active={props.ToggleStatus[8]} /></div>
      <div className={styles.esc}><DigitalNumber number={"--"} title="ESC"/></div>
      <div className={styles.flap}><DigitalNumber number={"--"} title="Flap"/></div>
      <div className={styles.groundDistance}><DigitalNumber number={"--"} title="Ground"/></div>
      <div className={styles.pot2}><DigitalNumber number={"--"} title="Pot 2"/></div>
      <div className={styles.pot3}><DigitalNumber number={"--"} title="Pot 3"/></div>
      <div className={styles.pot4}><DigitalNumber number={"--"} title="Pot 4"/></div>
      <div className={styles.pitch}><DigitalNumber number={"--"} title="Pitch"/></div>
      <div className={styles.row}><DigitalNumber number={"--"} title="Row"/></div>
      <div className={styles.rudder}><DigitalNumber number={"--"} title="Rudder"/></div>
      <div className={styles.battery}><DigitalNumber number={"--"} title="Batt"/></div>
      <div className={styles.satellites}><DigitalNumber number={"--"} title="SAT"/></div>
      <div className={styles.temperature}><DigitalNumber number={"--"} title="Temp"/></div>
      <div className={styles.humidity}><DigitalNumber number={"--"} title="Hum"/></div>
      <div className={styles.clock}><Clock/></div>
    </div>
  );
}

export default NumberIndicators;
