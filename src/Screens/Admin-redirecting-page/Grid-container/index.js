import React, { useEffect, useState } from "react";
import "./styles.css";
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
  }

  console.log("temple data", data);

  useEffect(() => {
    AdminProfiles();
  }, []);

  return (
    <div className="grid">
      <h1> Temples</h1>
      <h1>Collection</h1>
      {data && data.map((item) => {
        return (
          <div>
            <div>
              <img alt = ""  style = {{width: "100px"}} src={item?.logo} />
            </div>
            <div>{item?.name}</div>

          </div>
        )
      })}

    </div>
  );
}

export default Gridcontainer;
