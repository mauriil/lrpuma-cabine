import React from "react";
import "./DigitalNumber.css";
import { Number } from "../Clock/Number";
import { Word } from "../Clock/Word"

function DigitalNumber(props) {
  return (
    <div className="clock">
      <div className="calendar"><Word key={0} value={props.title} hidden={false}/></div>
      <div className="row">
        <div className="hour">
          <Number value={props.number} />
        </div>
      </div>
    </div>
  );
}

export default DigitalNumber;
