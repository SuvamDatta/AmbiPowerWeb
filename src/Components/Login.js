import React, { useRef, useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();
  const [mobile, setmobile] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const errors = {
    otp: "Invalid otp",
    mobile: "Invalid mobile",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { mobileNumber, otp } = document.forms[0];
    if (otp.value != 1234) {
      // Invalid otp
      setErrorMessages({ name: "otp", message: errors.otp });
    } else {
      setIsSubmitted(true);
    }
  };
  function handleMobileChange(event) {
    if (event.target.value.length > 10) {
      setErrorMessages({ name: "MobileNo", message: errors.mobile });
    } else {
      setErrorMessages("");
    }
  }
  function handleOtpChange(event) {
    setErrorMessages("");
  }
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Mobile Number </label>
          <input
            type="number"
            name="MobileNo"
            required
            onChange={handleMobileChange}
          />
          {renderErrorMessage("MobileNo")}
        </div>

        <div className="input-container">
          <label>OTP </label>
          <input type="number" name="otp" required onChange={handleOtpChange} />
          {renderErrorMessage("otp")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <h2>Login</h2>
      <div className="login-form">
        {isSubmitted ? navigate("/Home") : renderForm}
      </div>
    </div>
  );
}
export default Login;
