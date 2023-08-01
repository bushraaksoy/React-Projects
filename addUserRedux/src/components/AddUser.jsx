import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../redux/Actions";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userObj = { name, email, phone, role };
    dispatch(FunctionAddUser(userObj));
    navigate("/user");
  };

  return (
    <div className="add-user">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h2>Add User</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    autoComplete="off"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="name"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    autoComplete="off"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id="email"
                    type="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    autoComplete="off"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    id="phone"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    className="form-control"
                    id="role"
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {" | "}
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
