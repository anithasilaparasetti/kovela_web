import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faHotel,faLocationDot,faCirclePlay } from '@fortawesome/free-solid-svg-icons'


function Morepages() {
  return (
    <div className="m-3 Morepages p-3">
      <p>More Pages</p>
      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faEnvelope} bounce style={{color: "#132dff",}} />
        <p>Email Box</p>
      </div>
      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faHotel} style={{color: "#132dff",}} />
        <p>Near Hotel</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faLocationDot} style={{color: "#132dff",}} />
        <p>Latest Event</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faCirclePlay} style={{color: "#132dff",}} />
        <p>Live Stream</p>
      </div>
    </div>
  );
}

export default Morepages;
