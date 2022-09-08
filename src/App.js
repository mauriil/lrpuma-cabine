import styles from './App.module.css';
import FlightIndicators from './components/FlightIndicators/FlightIndicators';
import Map from './components/Map/Map';

function App() {
  return (
    <div className={styles.gridContainer}>
      <FlightIndicators className={styles.div1}/>
      <Map className={styles.div2}/>
    </div>
  );
}

export default App;
