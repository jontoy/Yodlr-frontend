import React, { useState } from "react";
import YodlrApi from "../yodlrApi";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import Alert from "./Alert";

const Signup = () => {
  const history = useHistory();
  const BASE_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    errors: [],
  };
  const [formData, setFormData] = useState(BASE_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      errors: [],
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { errors, ...data } = formData;
      const user = await YodlrApi.signup(data);
      console.log(user);
      history.push("/");
    } catch (errors) {
      setFormData((data) => ({
        ...data,
        errors,
      }));
    }
  };
  return (
    <div className="Signup container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control"
                type="text"
                value={formData.first_name}
                id="firstName"
                name="firstName"
                placeholder="e.g. John"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="form-control"
                type="text"
                value={formData.last_name}
                id="lastName"
                name="lastName"
                placeholder="e.g. Smith"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control"
                type="text"
                value={formData.email}
                id="email"
                name="email"
                placeholder="e.g. johnsmith@gmail.com"
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-info">Sign Up!</button>
          </form>
          {formData.errors.length > 0 ? <Alert msgs={formData.errors} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Signup;
