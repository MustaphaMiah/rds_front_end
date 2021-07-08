import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const apiURL =
    "https://va3zdlc81i.execute-api.us-east-1.amazonaws.com/dev/users";

  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        //   console.log(...response.data.data);
        console.log(res);
        const exactUsers = res.data.data;
        console.log(exactUsers);
        setUsers(exactUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.Id}>{user.First_Name}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;
