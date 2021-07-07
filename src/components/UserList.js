import React, { useEffect } from "react";
import axios from "axios";

function UserList() {
  const apiURL =
    "https://va3zdlc81i.execute-api.us-east-1.amazonaws.com/dev/users";

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log("line12", ...response.data.data);
    });
    //   .then((responseJSON) => {
    //     const userData = [...responseJSON.data];
    //     console.log("line 16", userData);
    //   });
    //   .then((JSON.response) => {
    //     JSONResponse
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  return <div>{/* <p>{firstName}</p> */}</div>;
}
export default UserList;
