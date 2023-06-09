import { useRef } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
function App() {
  const height = $(window).height();
  const width = $(window).width();
  return (
    <div className="App">
      <div
        className="centerlogo"
        style={{ height: height * 0.5, width: width }}
      >
        <img src={require("../Images/ambulancegiphy.gif")} />
      </div>
      <div style={{ height: height * 0.5-40, width: width }}>
        <text className="boldtext">Ambulance at your door-step!</text>
        <br />
        <br />
        <br />
        <Link to="/Login">
          <button className="box" type="submit">
            <text className="Logintext">Login to Explore</text>
            <img
              className="rightarrow"
              src={require("../Images/rightArrow.png")}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
