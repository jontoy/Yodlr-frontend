import React from "react";
import UserCard from "./UserCard";

const UsersList = ({ users = [] }) => {
  return (
    <ul className="JobsList list-unstyled">
      {users.map(({ id, email, firstName, lastName, state }) => (
        <li key={id}>
          <UserCard
            id={id}
            email={email}
            firstName={firstName}
            lastName={lastName}
            state={state}
          />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
