import { React, useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
function Home() {
  const height = $(window).height();
  const width = $(window).width();
  var [Lattitude, SetLattitude] = useState(0);
  var [Longitude, SetLongitude] = useState(0);
  var center = {
    lat: 22.565570,
    lng: 88.370210,
  };
  var [LatLong, SetLatLong] = useState(center);
  const containerStyle = {
    width: width * 0.8,
    height: "100%",
  };
  var markers = [];
  var markerCoordinate = [
    {
      lat: 22.666771,
      lng: 88.444771,
      ambtype: "EmergencyICU",
    },
    {
      lat: 22.615589,
      lng: 88.421989,
      ambtype: "EmergencyICU",
    },
    {
      lat: 22.650928,
      lng: 88.41774,
      ambtype: "OxygenSupport",
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
        markerCoordinate[id].ambtype == "EmergencyICU" ? true : false,
      key: id++,
    });
  }
  useEffect(() => {
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
      ></div>
      <div
        style={{
          height: "100%",
          width: width * 0.8,
          marginTop: 1,
        }}
      >
        <div
          style={{
            width: width * 0.8,
            height: "65%",
          }}
        >
          <LoadScript googleMapsApiKey="AIzaSyBt2YFXqhxl-37hwCcCao0BZvaSl9mQ0WI">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={LatLong}
              zoom={10}
            >
              <Marker position={LatLong} clickable = {true}/>
              {markers.map((marker) =>
                marker.IsEmergency == true ? (
                  <Marker
                    position={marker.coordinate}
                    key={marker.key}
                    clickable = {true}
                    icon={"../Images/EmergencyICUMap.png"}
                  />
                ) : (
                  <Marker
                    position={marker.coordinate}
                    key={marker.key}
                    clickable = {true}
                    icon={"../Images/OxygenSupportMap.png"}
                  />
                )
              )}
            </GoogleMap>
          </LoadScript>
        </div>
        <div
          style={{
            width: width * 0.8,
            height: "35%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;
