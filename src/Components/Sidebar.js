import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div>
      <br />
      <Link to="/MyProfile" className="textcolor">
        My Profile
      </Link>
      <br />
      <br />
      <Link to="/Payments" className="textcolor">
        Payments
      </Link>
      <br />
      <br />
      <Link to="/MyBooking" className="textcolor">
        My Bookings
      </Link>
      <br />
      <br />
      <Link to="/RegisterAmbulance" className="textcolor">
        Register As Ambulance
      </Link>
      <br />
      <br />
      <Link to="/Driver" className="textcolor">
        Register As Driver
      </Link>
      <br />
      <br />
      
      
      <Link to="/HelpAndSupport" className="textcolor">
        Help And Support
      </Link>
      <br />
      <br />
      <Link to="/Login" className="textcolor">
        Log Out
      </Link>
    </div>
  );
};
