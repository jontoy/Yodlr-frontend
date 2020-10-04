import React, { useState, useEffect } from "react";
import YodlrApi from "../yodlrApi";
import UsersList from "./UsersList";
import Searchbox from "./Searchbox";

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function getUsers() {
      let allUsers = await YodlrApi.getUsers({ q: searchTerm });
      setUsers(allUsers);
    }
    getUsers();
    setIsLoading(false);
  }, [setUsers, searchTerm]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  return (
    <div className="AdminPanel container">
      <h1>Admin Panel</h1>
      <hr />
      <h3>Current Users</h3>
      <Searchbox filterResults={setSearchTerm} />
      <UsersList users={users} />
    </div>
  );
};

export default Jobs;
