import React from "react";
import "./Newsfeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv,faIdBadge,faGlobe,faBolt,faUser} from '@fortawesome/free-solid-svg-icons'



function Newsfeed() {
  return (
    <div className="m-3 Newfeed p-3 ">
     <p>New feeds</p>
      <div className="d-flex feed mb-2">
      
      <FontAwesomeIcon icon={faTv} style={{color: "#132dff",}} />
      <p>New Feeds</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faIdBadge} style={{color: "#132dff",}} />
        <p>Badges</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faGlobe} style={{color: "#132dff",}} />
        <p>Explore stories</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faBolt} style={{color: "#001eff",}} />
        <p>Popular groups</p>
      </div>

      <div className="d-flex feed mb-2">
      <FontAwesomeIcon icon={faUser} style={{color: "#132dff",}} />
        <p>Newsfeed</p>
      </div>
    </div>
  );
}

export default Newsfeed;
