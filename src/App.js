import './App.css';
import FlightIndicators from './components/FlightIndicators/FlightIndicators';

function App() {
  return (
    <div className="parent">
      <FlightIndicators className="div1"/>
      <FlightIndicators className="div2 "/>
      <FlightIndicators className="div3"/>
      <FlightIndicators className="div4"/>
    </div>
  );
}

export default App;
