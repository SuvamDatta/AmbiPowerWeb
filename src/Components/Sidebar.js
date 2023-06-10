import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div><br />
      <Link to="/MyProfile" className="textcolor">My Profile</Link>
      <br /><br />
      <Link to="/Driver" className="textcolor">Driver Registration</Link>
      <br /><br />
      <Link to="/Admin" className="textcolor">Administrative Section</Link>
      <br /><br />
      <Link to="/HelpAndSupport" className="textcolor">Help And Support</Link>
    </div>
  );
};
