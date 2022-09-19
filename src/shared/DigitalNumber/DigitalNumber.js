import React from "react";
import "../Clock/Clock.css";
import { Number } from "../Clock/Number";
import { Word } from "../Clock/Word"

function DigitalNumber(props) {
  return (
    <div className="clock">
      <div className="calendar"><Word key={0} value={props.title} hidden={false}/></div>
        <div className="hour">
          <Number value={props.number} />
        </div>
    </div>
  );
}

export default DigitalNumber;
