import React, { useState } from "react";
import "../App.css";
import { FaLock, FaUser } from "react-icons/fa";

function Admin() {
  const [admin, setAdmin] = useState({
    adminId: "",
    password: "",
  });

  const [records, setRecords] = useState([{}]);

  const handleAdminInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecords = { ...admin, id: new Date().getTime().toString() };
    setRecords([...records, { newRecords }]);
    setAdmin({ adminId: "", password: "" });
  };
  console.log(records);
  return (
    <div className="container">
      <div className="form-container sign-in-container">
        <form className="userLogin" onSubmit={handleSubmit}>
          <h1>Admin</h1>
          <div className="adminIcon">
            <span className="inputIcon">
              <FaUser />
            </span>
            <input
            className="loginInput"
              type="text"
              required
              placeholder="Admin ID"
              autoComplete="off"
              name="adminId"
              id="adminId"
              value={admin.adminId}
              onChange={handleAdminInput}
            />
          </div>
          <div className="passwordIcon">
            <span className="inputIcon">
              <FaLock />
            </span>
            <input
            className="loginInput"
              type="Password"
              required
              placeholder="Password"
              autoComplete="off"
              name="password"
              id="password"
              value={admin.password}
              onChange={handleAdminInput}
            />
          </div>
          <button type="submit" className="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
