import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const apiURL =
    "https://va3zdlc81i.execute-api.us-east-1.amazonaws.com/dev/users";

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      //   console.log(...response.data.data);
      const data = [...response.data.data];
      //   setUsers[response];
      console.log(data);
      setUsers(data);
    });
  }, []);
  return <div>{/* <p>Hello {users}</p> */}</div>;
}
export default UserList;
