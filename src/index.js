import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Components/App";
import MyBooking from "./Components/MyBooking";
import Login from "./Components/Login";
import Home from "./Components/Home";
import MyProfile from "./Components/MyProfile";
import Payments from "./Components/Payments";
import RegisterAmbulance from "./Components/RegisterAmbulance";
import Driver from "./Components/Driver";
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
        <Route exact path="/MyBooking" element={<MyBooking />}></Route>
        <Route exact path="/MyProfile" element={<MyProfile />}></Route>
        <Route exact path="/Driver" element={<Driver />}></Route>
        <Route exact path="/Payments" element={<Payments />}></Route>
        <Route exact path="/HelpAndSupport" element={<HelpAndSupport />}></Route>
        <Route exact path="/RegisterAmbulance" element={<RegisterAmbulance />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);