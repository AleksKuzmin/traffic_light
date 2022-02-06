import "../styles/Home.css";
import { useState, useEffect } from "react";
import Axios from "axios";
const Home = () => {
  const [color, SetColor] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/status")
      .then((response) => {
        SetColor(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(color);

  useEffect(() => {
    Axios.put("http://localhost:3001/changeLights").then((response) =>
      console.log(response.data)
    );
  }, []);

  function changeLights() {
    
  }
  return (
    <div className="layout">
      <div className="traffic-light">
        <div className={"red" + (color === "red" ? " black" : "")}></div>
        <div className="green" onClick={() => console.log("click")}></div>
      </div>
      <div className="traffic-light">
        <div className="red" onClick={() => console.log("click")}></div>
        <div className="green" onClick={() => console.log("click")}></div>
      </div>
      <button onClick={changeLights}>Change Traffic Lights</button>
    </div>
  );
};
export default Home;
