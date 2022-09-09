import styles from "./App.module.css";
import FlightIndicators from "./components/FlightIndicators/FlightIndicators";
import Map from "./components/Map/Map";
import NumberIndicators from "./components/NumberIndicators/NumberIndicators";
import React, { Component, useEffect, useState } from "react";
const mqtt = require("mqtt");
const client = mqtt.connect("ws://143.198.182.161:8083/mqtt");

function App() {
  const [FlightIndicatorsNumbers, setFlightIndicatorsNumbers] = React.useState({altitude: 0, course: 0, speed: 0, gyroX: 90, gyroY: 90});
  const [position, setPosition] = React.useState({latitude: 0, longitude: 0});

  useEffect(() => {
    if (client) {
      console.log(client);
      client.on("connect", () => {
        console.log("mqtt conected");
        client.subscribe("/FELIA/GPS");
        client.subscribe("/FELIA/gyrox");
        client.subscribe("/FELIA/gyroy");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        console.log("re conecting");
      });
      client.on("message", (topic, message) => {
        const payload = { topic, message: message.toString() };
        if (topic == '/FELIA/GPS') {
          const [latitude, longitude, satelites, altitude, course, speed] = message.toString().split(',');
          FlightIndicatorsNumbers.altitude = altitude;
          FlightIndicatorsNumbers.course = course;
          FlightIndicatorsNumbers.speed = speed;
          setFlightIndicatorsNumbers(FlightIndicatorsNumbers);
          setPosition({latitude, longitude});
        }
        if (topic == '/FELIA/gyrox') {
          FlightIndicatorsNumbers.gyroX = message.toString();
          setFlightIndicatorsNumbers(FlightIndicatorsNumbers);
        }
        if (topic == '/FELIA/gyroy') {
          FlightIndicatorsNumbers.gyroY = message.toString();
          setFlightIndicatorsNumbers(FlightIndicatorsNumbers);
        }
        console.log("new message: ", payload);
      });
    }
  }, [client]);

  return (
    <div>
      <div className={styles.gridContainer}>
        <FlightIndicators FlightIndicatorsNumbers={FlightIndicatorsNumbers} />
        <Map position={position} />
      </div>
      <div>
        <NumberIndicators />
      </div>
    </div>
  );
}

export default App;
