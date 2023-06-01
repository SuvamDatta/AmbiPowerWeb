import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Components/App";
import Map from "./Components/Map";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Map" element={<Map />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);