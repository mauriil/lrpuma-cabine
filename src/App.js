import styles from "./App.module.css";
import FlightIndicators from "./components/FlightIndicators/FlightIndicators";
import Map from "./components/Map/Map";
import NumberIndicators from "./components/NumberIndicators/NumberIndicators";

function App() {
  return (
    <div>
      <div className={styles.gridContainer}>
        <FlightIndicators />
        <Map />
      </div>
      <div>
        <NumberIndicators/>
      </div>
    </div>
  );
}

export default App;
