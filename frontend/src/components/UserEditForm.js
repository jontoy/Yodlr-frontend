import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YodlrApi from "../yodlrApi";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import Alert from "./Alert";

const UserEditForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    async function getUser() {
      let targetUser = await YodlrApi.getUser(id);
      setFormData((data) => ({ ...targetUser, errors: [] }));
      setIsLoading(false);
    }
    getUser();
  }, [id]);
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      errors: [],
      [name]: value,
    }));
  };
  const handleToggle = (e) => {
    setFormData((data) => ({
      ...data,
      state: data.state === "pending" ? "active" : "pending",
      errors: [],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { errors, ...data } = formData;
      await YodlrApi.updateUser(id, data);
      history.push("/admin");
    } catch (errors) {
      setFormData((data) => ({
        ...data,
        errors,
      }));
    }
  };

  return (
    <div className="UserEditForm container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control"
                type="text"
                value={formData.firstName}
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
                value={formData.lastName}
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
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="stateCheck"
                onChange={handleToggle}
                checked={formData.state === "active"}
              />
              <label className="form-check-label" htmlFor="stateCheck">
                Active Account?
              </label>
            </div>
            <button type="submit" className="btn btn-info">
              Update!
            </button>
          </form>
          {formData.errors.length > 0 ? <Alert msgs={formData.errors} /> : null}
        </div>
      </div>
    </div>
  );
};

export default UserEditForm;
