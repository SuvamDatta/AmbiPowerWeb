import { React, useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Sidebar from "./Sidebar";
import "./Home.css";
function Home() {
  const height = $(window).height();
  const width = $(window).width();
  var [Lattitude, SetLattitude] = useState(0);
  var [Longitude, SetLongitude] = useState(0);
  var center = {
    lat: 22.56557,
    lng: 88.37021,
  };
  var [LatLong, SetLatLong] = useState(center);
  const containerStyle = {
    width: width * 0.8,
    height: "100%",
  };
  var markers = [];
  var markerCoordinate = [
    {
      lat: 22.650928,
      lng: 88.41774,
      ambtype: "EmergencyICU",
      timetoreach: "Reach By 3 mins",
    },
    {
      lat: 22.666771,
      lng: 88.444771,
      ambtype: "OxygenSupport",
      timetoreach: "Reach By 10 mins",
    },
    {
      lat: 22.615589,
      lng: 88.421989,
      ambtype: "OxygenSupport",
      timetoreach: "Reach By 12 mins",
    },
  ];
  let id = 0;
  for (let i = 0; i < markerCoordinate.length; i++) {
    markers.push({
      coordinate: {
        lat: markerCoordinate[id].lat,
        lng: markerCoordinate[id].lng,
      },
      IsEmergency:
        markerCoordinate[id].ambtype === "EmergencyICU" ? true : false,
      timetoreach: markerCoordinate[id].timetoreach,
      key: ++id,
    });
  }
  useEffect(() => {
    $(".hamburgermenu").show();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        Lattitude = position.coords.latitude;
        Longitude = position.coords.longitude;
        SetLattitude(position.coords.latitude);
        SetLongitude(position.coords.longitude);
        center = {
          lat: Lattitude,
          lng: Longitude,
        };
        SetLatLong(center);
      },
      (error) => {
        alert("Location Access is required. Please provide permission.");
      },
      { enableHighAccuracy: true }
    );
    for (let index = 1; index < 100; index++) {
      $("#" + index).on("click", function () {
        $("#" + index).hide();
        $("#" + index)
          .parent()
          .find(".txtbooked")
          .show();
      });
    }
  }, []);
  function onMarkerClick(marker) {
    alert(marker.timetoreach);
  }
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
      >
        <div className="righttopambtype row">
          <div style={{ width: "20%", marginTop: "3px" }}>
            <text className="textclass">Ambulance Type :</text>
          </div>
          <div className="row">
            <text className="textclass textclass1">Oxygen Support</text>
            <img
              className="imgclass"
              src={"https://img.icons8.com/?size=40&id=Qe5bInsarTGb&format=png"}
            />
            <text className="textclass textclass1">Emergency ICU Support</text>
            <img
              className="imgclass"
              src={"https://img.icons8.com/?size=40&id=38771&format=png"}
            />
          </div>
        </div>
        <div
          style={{
            width: width * 0.8,
            height: "60%",
          }}
        >
          <LoadScript googleMapsApiKey="AIzaSyBt2YFXqhxl-37hwCcCao0BZvaSl9mQ0WI">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={LatLong}
              zoom={10}
            >
              <Marker position={LatLong} clickable={true} />
              {markers.map((marker) =>
                marker.IsEmergency === true ? (
                  <Marker
                    position={marker.coordinate}
                    key={marker.key}
                    clickable={true}
                    onClick={() => onMarkerClick(marker)}
                    title={marker.timetoreach}
                    icon={"https://img.icons8.com/?size=40&id=38771&format=png"}
                  />
                ) : (
                  <Marker
                    position={marker.coordinate}
                    key={marker.key}
                    clickable={true}
                    onClick={() => onMarkerClick(marker)}
                    title={marker.timetoreach}
                    icon={
                      "https://img.icons8.com/?size=40&id=Qe5bInsarTGb&format=png"
                    }
                  />
                )
              )}
            </GoogleMap>
          </LoadScript>
        </div>
        <div
          style={{
            width: width * 0.8,
          }}
          className="bottomrightdiv"
        >
          <text className="txtavamb">Available Ambulances</text>
          <br />
          {markers.map((marker) =>
            marker.IsEmergency === true ? (
              <div className="totaldiv row">
                <img
                  className="ambimg"
                  src="https://img.icons8.com/?size=40&id=38771&format=png"
                ></img>
                <div className="divwidth">
                  <text className="textclass textclass1">
                    Emergency ICU Support
                  </text>
                </div>
                <div style={{ width: "200px" }}>
                  <text className="textclass textclass1 ">
                    {marker.timetoreach}
                  </text>
                </div>
                <button id={marker.key}>Book Ambulance</button>
                <text className="txtbooked">Booked!</text>
              </div>
            ) : (
              <div className="totaldiv row">
                <img
                  className="ambimg"
                  src="https://img.icons8.com/?size=40&id=Qe5bInsarTGb&format=png"
                ></img>
                <div className="divwidth">
                  <text className="textclass textclass1">Oxygen Support </text>
                </div>
                <div style={{ width: "200px" }}>
                  <text className="textclass textclass1">
                    {marker.timetoreach}
                  </text>
                </div>
                <button id={marker.key}>Book Ambulance</button>
                <text className="txtbooked">Booked!</text>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
