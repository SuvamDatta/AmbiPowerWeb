import { useRef } from "react";
import { Link } from "react-router-dom";
function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div className="App">
      <div
        className="centerlogo"
        width={windowSize.current[0] * 0.6}
        height={windowSize.current[1] * 0.6}
      >
        <img src={require("../Images/ambulancegiphy.gif")} />
      </div>
      <text className="boldtext">Ambulance at your door-step!</text>
      <br />
      <br />
      <br />
      <Link to="/Map">
        <button className="box" type="submit">
          <text className="Logintext">Login to Explore</text>
          <img
            className="rightarrow"
            src={require("../Images/rightArrow.png")}
          />
        </button>
      </Link>
    </div>
  );
}

export default App;
