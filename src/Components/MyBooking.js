import { React, useEffect } from "react";
import $ from "jquery";
import Sidebar from "./Sidebar";
import "./RegisterAmb.css";
function MyBooking() {
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
        
      </div>
    </div>
  );
}
export default MyBooking;
