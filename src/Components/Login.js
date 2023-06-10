import React, { useRef, useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

function Login() {
  useEffect(() => {
    $(".hamburgermenu").hide();
  }, []);
  const navigate = useNavigate();
  const height = $(window).height();
  const width = $(window).width();
  const [txtPhNumber, setChangePhNo] = React.useState("");
  const [txtOtp, setChangeOTP] = React.useState("");
  const [txtUserName, setUserName] = React.useState("");
  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }
  function handlenumberChange(e) {
    setChangePhNo(e.target.value);
  }
  function handleotpChange(e) {
    setChangeOTP(e.target.value);
  }
  function handleClick() {
    if (txtUserName.length == 0) {
      alert("Invalid User Name");
    } else {
      if (txtPhNumber.length != 10) {
        alert("Invalid Mobile Number");
        setChangeOTP("");
      } else {
        if (txtOtp.length == 0) {
          setTimeout(() => {
            document
              .getElementsByClassName("displaynone")[0]
              .classList.remove("displaynone");
            document
              .getElementsByClassName("displaynone")[0]
              .classList.remove("displaynone");
            document
              .getElementsByClassName("usernameform")[0]
              .classList.add("displaynone");
            document
              .getElementsByClassName("mobileform")[0]
              .classList.add("displaynone");
              document.getElementsByClassName("submitbutton")[0].value="Submit OTP";
          }, 1000);
        } else if (txtOtp != "1234") {
          alert("Invalid OTP");
        } else {
          navigate("/Home");
        }
      }
    }
  }
  return (
    <div className="app">
      <div className="topbend"></div>
      <h2>Login</h2>
      <div className="login-form">
        <div style={{ textAlign: "center" }}>
          <label className="otpsent displaynone">OTP Sent!</label>
        </div>

        <div className="input-container usernameform">
          <label>User Name </label>
          <input
            type="text"
            name="UserName"
            onChange={(e) => {
              handleUserNameChange(e);
            }}
          />
        </div>

        <div className="input-container mobileform">
          <label>Mobile Number </label>
          <input
            type="number"
            name="MobileNo"
            maxLength={10}
            onChange={(e) => {
              handlenumberChange(e);
            }}
          />
        </div>

        <div className="input-container displaynone">
          <label>OTP </label>
          <input
            id="txtotp"
            type="number"
            name="otp"
            maxLength={4}
            onChange={(e) => {
              handleotpChange(e);
            }}
          />
        </div>

        <div className="button-container">
          <input
            type="submit"
            id="btnSendOtp"
            value="Send OTP"
            onClick={handleClick}
            className="submitbutton"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
