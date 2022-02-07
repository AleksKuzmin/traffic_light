import "../styles/Home.css";
import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
  const [color, SetColor] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/status")
      .then((response) => {
        SetColor(response.data);
      })
      .catch((error) => console.log(error));
  }, [color]);

  function change() {
    Axios.put("http://localhost:3001/changeLights", {}).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="layout">
      <div className="traffic-light">
        <div className={color.NS === "green" ? "black" : "red"}></div>
        <div className={color.NS === "red" ? "black" : "green"}></div>
      </div>

      <div className="traffic-light">
        <div className={color.WE === "green" ? "black" : "red"}></div>
        <div className={color.WE === "red" ? "black" : "green"}></div>
      </div>
      <button onClick={change}>Change Traffic Lights</button>
    </div>
  );
};
export default Home;
