import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGear,faChartPie,faMessage } from '@fortawesome/free-solid-svg-icons'


function Account() {
  return (
    <div className="m-3 Account p-3">
      <p>Account</p>
      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faGear} style={{color: "#ababab",}} />
        <p>Settings</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faChartPie} style={{color: "#ababab",}} />
        <p>Analytics</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faMessage} style={{color: "#ababab",}} />
        <p>Chat</p>
      </div>
    </div>
  );
}

export default Account;
