import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Components/App";
import Map from "./Components/Map";
import Login from "./Components/Login";
import Home from "./Components/Home";
import MyServices from "./Components/Pages/MyServices";
import Driver from "./Components/Pages/Driver";
import Admin from "./Components/Pages/Admin";
import HelpAndSupport from "./Components/Pages/HelpAndSupport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/App" element={<App />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/Map" element={<Map />}></Route>
        <Route exact path="/MyServices" element={<MyServices />}></Route>
        <Route exact path="/Driver" element={<Driver />}></Route>
        <Route exact path="/Admin" element={<Admin />}></Route>
        <Route exact path="/HelpAndSupport" element={<HelpAndSupport />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);