import React from "react";
import "./ToggleBtn.css"

function Toggle(props) {

  return (
    <div className="toggleWrapper">
      {props.title}
  <input type="checkbox" name={props.title} className="mobileToggle" id={props.title} checked={props.active}/>
  <label for={props.title}/>
</div>
  );
};

export default Toggle;
