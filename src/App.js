import logo from './logo.svg';
import './App.css';

import {
  Airspeed,
  Altimeter,
  AttitudeIndicator,
  HeadingIndicator,
  TurnCoordinator,
  Variometer
} from 'react-typescript-flight-indicators'

function App() {
  return (
    <div className="App">
      <HeadingIndicator heading={Math.random() * 360} showBox={false} />
			<hr />
			<Airspeed speed={150} showBox={true} />
			<hr />
			<Altimeter altitude={Math.random() * 28000} showBox={false} />
			<hr />
			<AttitudeIndicator roll={(Math.random() - 0.5) * 120} pitch={(Math.random() - 0.5) * 40} showBox={false} />
			<hr />
			<TurnCoordinator turn={(Math.random() - 0.5) * 120} showBox={false} />
			<hr />
			<Variometer vario={(Math.random() - 0.5) * 4000} showBox={false} />
    </div>
  );
}

export default App;
