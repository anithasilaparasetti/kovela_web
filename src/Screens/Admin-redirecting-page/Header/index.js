import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faMessage,faGear,faHouse,faBolt,faVideo,faUser,faBagShopping,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div className="header">
      <div className="socialia">
      <FontAwesomeIcon icon={faBolt} beat style={{color: "#1dfd0d",}} className="search-icon-position socialia-icon"  />
        
        <p className="header-text">Kovela</p>
      </div>
      <div className="search-container">
        <div className="d-flex input-container p-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#c4c0c0",}} className="search-icon-position"/>
          <input
            className="input-styles"
            placeholder="Start typing to search"
            type="search"
          />
        </div>
      </div>

      <div className="d-flex icon-container">
        <div className="icon">
        <FontAwesomeIcon icon={faHouse} style={{color: "#001df5",}} />
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faBolt} style={{color: "#001eff",}} />
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faVideo} style={{color: "#132dff",}} />
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faUser} style={{color: "#132dff",}} />
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faBagShopping} style={{color: "#132dff",}} />
        </div>
      </div>

      <div className="d-flex end-icon-container">
      <div className="icon">
      <FontAwesomeIcon icon={faBell} style={{color: "#132dd2",}} /> 
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faMessage} style={{color: "#130ff0",}} />
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faGear} spin style={{color: "#551cf2",}} />
        </div>
      </div>
    </div>
  );
}

export default Header;
