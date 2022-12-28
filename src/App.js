import React, { useState } from "react";
import UserDetails from "./components/Users/UserDetails";
import User from "./components/Users/User";

function App() {
  const [userDetail, setUserDetail] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserDetail((prevUserDetails) => {
      return [
        ...prevUserDetails,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <User onAddUser={addUserHandler} />
      <UserDetails users={userDetail} />
    </div>
  );
}

export default App;
