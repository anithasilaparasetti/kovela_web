import React, { useEffect, useState } from "react";
import "./Gridcontainer.css";
import { Link } from "react-router-dom";
import { AdminTemples } from "../../../utils/api";

function Gridcontainer() {
  const [data, setData] = useState([]);

  const AdminProfiles = async () => {
    try {
      let result = await AdminTemples();
      console.log("profiles list", result);

      if (result && result.status === 200) {
        setData(result?.data?.data);
        console.log("list", result);
      } else {
        alert("alert");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("temple data", data);

  useEffect(() => {
    AdminProfiles();
  }, []);

  return (
    <div className="grid">
      {data &&
        data.map((item) => {
          return (
            <div className="image-description-container">
              <div className="image-container">
                <img alt="Temple" className="image-width" src={item?.logo} />
              </div>
              <div className="image-description-width">{item?.name}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Gridcontainer;
