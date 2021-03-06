import "../styles/Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const TrafficLight = ({ color }) => {
  const redLight = color === "red" ? "red" : "black";
  const greenLight = color === "green" ? "green" : "black";

  return (
    <div className="traffic-light">
      <div className={redLight}></div>
      <div className={greenLight}></div>
    </div>
  );
};

const Lights = () => {
  const [lights, setLights] = useState({});

  const getLightStatus = () =>
    axios
      .get("http://localhost:3001/status")
      .then((res) => {
        setLights(res.data);
      })
      .catch((error) => console.log(error));

  useEffect(() => {
    getLightStatus();
  }, []);

  const change = () => {
    axios.put("http://localhost:3001/changeLights", {}).then(getLightStatus);
  };
  // adding some color
  return (
    <div className="layout">
      <TrafficLight color={lights.NS} />
      <TrafficLight color={lights.WE} />
      <button onClick={change}>Change Traffic Lights</button>
    </div>
  );
};
export default Lights;
