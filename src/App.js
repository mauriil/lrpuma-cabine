import styles from "./App.module.css";
import FlightIndicators from "./components/FlightIndicators/FlightIndicators";
import Map from "./components/Map/Map";
import NumberIndicators from "./components/NumberIndicators/NumberIndicators";
import React, { Component, useEffect, useState } from "react";
const mqtt = require("mqtt");
const client = mqtt.connect("ws://143.198.182.161:8083/mqtt");

function App() {
  const toggleReGexTopic = new RegExp("/FELIA/toggle");
  const [FlightIndicatorsNumbers, setFlightIndicatorsNumbers] = React.useState({
    altitude: 0,
    course: 0,
    speed: 0,
    gyroX: 90,
    gyroY: 90,
  });
  const [position, setPosition] = React.useState({ latitude: 0, longitude: 0 });
  const [TurnCoordinator, setTurnCoordinator] = React.useState(0);
  const [Variometer, setVariometer] = React.useState(0);
  const [ToggleStatus, setToggleStatus] = React.useState(Array(9).fill(0));
  const [Satelites, setSatelites] = React.useState(0);
  const [MiscIndicators, setMiscIndicators] = React.useState({
    ESC: "--",
    Ground: "--",
    Pot2: "--",
    Pot3: "--",
    Pot4: "--",
    Pitch: "--",
    Roll: "--",
    Rudder: "--",
    Batt: "--",
    Temp: "--",
    Hum: "--",
    Pressure: "--",
  });

  useEffect(() => {
    if (client) {
      console.log(client);
      client.on("connect", () => {
        console.log("mqtt conected");
        client.subscribe("/FELIA/GPS");
        client.subscribe("/FELIA/gyrox");
        client.subscribe("/FELIA/gyroy");
        client.subscribe("/FELIA/accelerationx");
        client.subscribe("/FELIA/accelerationy");
        client.subscribe("/FELIA/YAW");
        client.subscribe("/FELIA/ROLL");
        client.subscribe("/FELIA/RUDDER");
        client.subscribe("/FELIA/ESC");
        client.subscribe("/FELIA/POT_2");
        client.subscribe("/FELIA/POT_3");
        client.subscribe("/FELIA/POT_4");
        client.subscribe("/FELIA/temperature");
        client.subscribe("/FELIA/pressure");
        client.subscribe("/FELIA/altitude");
        client.subscribe("/FELIA/toggle_1");
        client.subscribe("/FELIA/toggle_2");
        client.subscribe("/FELIA/toggle_3");
        client.subscribe("/FELIA/toggle_4");
        client.subscribe("/FELIA/toggle_5");
        client.subscribe("/FELIA/toggle_6");
        client.subscribe("/FELIA/toggle_7");
        client.subscribe("/FELIA/toggle_8");
        client.subscribe("/FELIA/toggle_9");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        console.log("re conecting");
      });
      client.on("message", (topic, message) => {
        // TO DEBUG MSGS:
        // const payload = { topic, message: message.toString() };
        // console.log("new message: ", payload);
        if (topic === "/FELIA/GPS") {
          const [latitude, longitude, satelites, altitude, course, speed] =
            message.toString().split(",");
          FlightIndicatorsNumbers.course = course;
          FlightIndicatorsNumbers.speed = speed;
          position.latitude = latitude;
          position.longitude = longitude;
          setSatelites(satelites);
        }
        if (topic === "/FELIA/gyrox") {
          FlightIndicatorsNumbers.gyroX = message.toString();
        }
        if (topic === "/FELIA/gyroy") {
          FlightIndicatorsNumbers.gyroY = message.toString();
        }
        if (topic === "/FELIA/accelerationx") {
          setTurnCoordinator(parseFloat(message.toString()));
        }
        if (topic === "/FELIA/accelerationy") {
          setVariometer(parseFloat(message.toString()));
        }
        if(!!topic.match(toggleReGexTopic)){
          const toggleNumber = parseInt(topic.split("/")[2].slice(-1)) - 1  // Number of toggle
          ToggleStatus[toggleNumber] = message.toString() === "1" ? 1 : 0;
          setToggleStatus([...ToggleStatus]);
        }
        if (topic === "/FELIA/YAW") {
          MiscIndicators.Pitch = message.toString();
        }
        if (topic === "/FELIA/ROLL") {
          MiscIndicators.Roll = message.toString();
        }
        if (topic === "/FELIA/RUDDER") {
          MiscIndicators.Rudder = message.toString();
        }
        if (topic === "/FELIA/ESC") {
          MiscIndicators.ESC = message.toString();
        }
        if (topic === "/FELIA/POT_2") {
          MiscIndicators.Pot2 = message.toString();
        }
        if (topic === "/FELIA/POT_3") {
          MiscIndicators.Pot3 = message.toString();
        }
        if (topic === "/FELIA/POT_4") {
          MiscIndicators.Pot4 = message.toString();
        }
        if (topic === "/FELIA/temperature") {
          MiscIndicators.Temp = message.toString();
        }
        if (topic === "/FELIA/pressure") {
          MiscIndicators.Pressure = message.toString();
        }
        if (topic === "/FELIA/altitude") {
          FlightIndicatorsNumbers.altitude = message.toString();
        }
        
        setMiscIndicators({...MiscIndicators})
        setFlightIndicatorsNumbers({ ...FlightIndicatorsNumbers });
        setPosition({ ...position });

      });
    }
  }, [client]);

  return (
    <div>
      <div className={styles.gridContainer}>
        <FlightIndicators
          FlightIndicatorsNumbers={FlightIndicatorsNumbers}
          TurnCoordinator={TurnCoordinator}
          Variometer={Variometer}
        />
        <Map position={position} />
      </div>
      <div className={styles.numbersContainer}>
        <NumberIndicators
          ToggleStatus={ToggleStatus}
          Satelites={Satelites}
          MiscIndicators={MiscIndicators}
        />
      </div>
    </div>
  );
}

export default App;
