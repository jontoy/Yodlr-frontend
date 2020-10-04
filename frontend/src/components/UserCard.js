import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ id, email, firstName, lastName, state }) => {
  return (
    <Link to={`/admin/users/${id}`}>
      <div className="UserCard card p-2 mb-1">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>

        <h6 className="card-subtitle mb-2 text-muted">({email})</h6>

        <p className="card-text">{state}</p>
      </div>
    </Link>
  );
};

export default UserCard;
