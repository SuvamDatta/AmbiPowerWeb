import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Components/App";
import Map from "./Components/Map";
import Login from "./Components/Login";
import Home from "./Components/Home";
import MyProfile from "./Components/MyProfile";
import Driver from "./Components/Driver";
import Admin from "./Components/Admin";
import HelpAndSupport from "./Components/HelpAndSupport";
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
        <Route exact path="/MyProfile" element={<MyProfile />}></Route>
        <Route exact path="/Driver" element={<Driver />}></Route>
        <Route exact path="/Admin" element={<Admin />}></Route>
        <Route exact path="/HelpAndSupport" element={<HelpAndSupport />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);