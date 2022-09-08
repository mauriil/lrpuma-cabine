import styles from './App.module.css';
import FlightIndicators from './components/FlightIndicators/FlightIndicators';

function App() {
  return (
    <div className={styles.gridContainer}>
      <FlightIndicators className={styles.div1}/>
      <div className={styles.div2}>MAP GOES HERE</div>
    </div>
  );
}

export default App;
