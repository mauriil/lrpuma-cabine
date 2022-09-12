import React from "react";
import "./ToggleBtn.css"

function Toggle(props) {

  return (
    <div className="toggleWrapper">
      {props.title}
  <input type="checkbox" name="toggle2" className="mobileToggle" id="toggle2"/>
  <label for="toggle2"/>
</div>
  );
};

export default Toggle;
