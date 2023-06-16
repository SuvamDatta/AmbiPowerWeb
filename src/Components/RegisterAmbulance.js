import { React, useEffect } from "react";
import $ from "jquery";
import Sidebar from "./Sidebar";
import "./RegisterAmb.css";
function RegisterAmbulance() {
  const height = $(window).height();
  const width = $(window).width();
  useEffect(() => {
    $(".btnRegister").on("click", function () {
      $('.trdatasaved').show();
      $('.txtfield').val('');
    });
  }, []);
  return (
    <div
      className="App row"
      style={{
        height: height - 40,
        width: width,
      }}
    >
      <div
        style={{
          height: "100%",
          width: width * 0.2,
          marginTop: 1,
        }}
        className="leftpanel"
      >
        <Sidebar />
      </div>
      <div
        style={{
          height: "100%",
          width: width * 0.8,
          marginTop: 1,
        }}
        className="dvparent"
      >
        <text className="largetext">New Ambulance Registration</text>
        <table className="tblclass">
          <tr>
            <td>
              <label className="label">Ambulance Type</label>
            </td>
            <td>
              <input
                type="text"
                name="label"
                className="txtfield"
                // onChange={(e) => {
                //   handleUserNameChange(e);
                // }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Car Number</label>
            </td>
            <td>
              <input
                type="text"
                name="labelcar"
                className="txtfield"
                // onChange={(e) => {
                //   handleUserNameChange(e);
                // }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Registration Date</label>
            </td>
            <td>
              <input
                type="text"
                name="labelregdate"
                className="txtfield"
                // onChange={(e) => {
                //   handleUserNameChange(e);
                // }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <text>Available From</text>
            </td>
            <td>
              <input
                type="text"
                name="labelavfrom"
                className="txtfield"
                // onChange={(e) => {
                //   handleUserNameChange(e);
                // }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="btnRegister">Register</button>
              <button className="btnCancel">Cancel</button>
            </td>
          </tr>
          <tr className="trdatasaved">
            <td></td>
            <td>
              <label className="lblBold">Registered Successfully</label>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default RegisterAmbulance;
