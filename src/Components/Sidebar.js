import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from "react-router-dom";
// ...
export default props => {
  return (
    <Menu>
      <a className="menu-item"  href="/MyServices">
        My Services
      </a>
      <a className="menu-item" href="/Driver">
        Driver Page
      </a>
      <a className="menu-item" href="/Admin">
        Admin
      </a>
      <a className="menu-item" href="/HelpAndSupport">
        Help & Contact
      </a>
    </Menu>
  );
};