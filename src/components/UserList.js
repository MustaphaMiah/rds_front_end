import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  //   const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [firstName, setfFirstName] = useState([]);
  const [nameSearch, setNameSearch] = useState();
  //   const apiURL =
  //     "https://va3zdlc81i.execute-api.us-east-1.amazonaws.com/dev/users";

  const apiURL = `https://va3zdlc81i.execute-api.us-east-1.amazonaws.com/dev/user/firstname/${nameSearch}`;

  const handleClick = () => {
    setNameSearch(firstName);
  };
  useEffect(() => {
    axios
      .get(apiURL)
      .then((res) => {
        //   console.log(...response.data.data);
        console.log("initial API response", res);
        const exactUser = res.data.data;
        console.log("the data I need", exactUser);
        setUser(exactUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nameSearch]);

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setfFirstName(e.target.value)}
      />
      <br />
      <button type="button" onClick={handleClick}>
        Search Developers
      </button>
      <p>
        First Name: {user.First_Name}
        <br />
        Last Name: {user.Last_Name}
        <br />
        Age: {user.age}
      </p>
      {/* <ul>
        {users.map((user) => (
          <li key={user.Id}>{user.First_Name}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default UserList;
