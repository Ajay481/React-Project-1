import React from "react";
import Card from "../UI/Card";
import classes from "./UserDetails.module.css";

const UserDetails = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old) {user.collegename}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserDetails;
