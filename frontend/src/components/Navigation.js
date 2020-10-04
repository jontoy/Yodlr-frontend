import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="Navigation navbar-expand navbar navbar-dark bg-success">
      <NavLink className="Navigation-link navbar-brand" to="/">
        Yodlr
      </NavLink>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="Navigation-link" to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="Navigation-link" to="/admin">
            Admin Panel
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
