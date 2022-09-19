import React from "react";
import { Word } from "../Clock/Word";
import "./ToggleBtn.css"

function Toggle(props) {

  return (
    <div className="clock">
      <div className="calendar"><Word key={0} value={props.title} hidden={false} /></div>
      <div className="hour">
        <div className="toggleWrapper">
          <input type="checkbox" name={props.title} className="mobileToggle" id={props.title} checked={props.active} readOnly={true} />
          <label htmlFor={props.title} />
        </div>
      </div>
    </div>


  );
};

export default Toggle;
