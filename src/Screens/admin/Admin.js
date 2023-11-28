import React from "react";
import "./Admin.css";
import Header from "../Admin-redirecting-page/Header/Header";
import Newsfeed from "../Admin-redirecting-page/Newfeeds/Newsfeed";
import Morepages from "../Admin-redirecting-page/Morepages/Morepages";
import Account from "../Admin-redirecting-page/Account-details/Account";
import Gridcontainer from "../Admin-redirecting-page/Grid-container/Gridcontainer";


function Admin() {
  return (
    <div className="Admin">
      <div className="p-3">
        <Header/>
      </div>
      <div className="admin-container p-1 d-flex">
        <div className="leftmenu">
          <Newsfeed />
          <Morepages />
          <Account />
        </div>
        <div className="grid-container">
         <Gridcontainer/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
