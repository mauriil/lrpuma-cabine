import React from 'react';
import PropTypes from 'prop-types';
import './FlightIndicators.module.css';

import {
  Airspeed,
  Altimeter,
  AttitudeIndicator,
  HeadingIndicator,
  TurnCoordinator,
  Variometer
} from 'react-typescript-flight-indicators';

const FlightIndicators = () => (
  <div className="FlightIndicators">
    <div className="div1">
      <HeadingIndicator heading={Math.random() * 360} showBox={false} />
    </div>
    <div className="div2">
    <Airspeed speed={150} showBox={true} />
    </div>
    <div className="div3">
    <Altimeter altitude={Math.random() * 28000} showBox={false} />
    </div>
    <div className="div4">
    <AttitudeIndicator roll={0} pitch={0} showBox={false} />
    </div>
    <div className="div5">
    <TurnCoordinator turn={(Math.random() - 0.5) * 120} showBox={false} />
    </div>
    <div className="div6">
    <Variometer vario={1500} showBox={false} />
    </div>
  </div>
);

FlightIndicators.propTypes = {};

FlightIndicators.defaultProps = {};

export default FlightIndicators;
