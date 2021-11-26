import { date } from "check-types";
import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "../App.css";
function User() {
  const [users, setUsers] = useState({
    userId: "",
    password: "",
  });

  const [records, setRecords] = useState([{}]);

  const handleUser = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecords = { ...users, id: new Date().getTime().toString() };
    setRecords([...records, {newRecords}]);
  };
  console.log(records);
  return (
    <div className="container">
      <div className="form-container sign-in-container">
        <form className="userLogin" onSubmit={handleSubmit}>
          <h1>User</h1>
          <div className="userIcon">
            <span>
              <FaUser />
            </span>
            <input
              type="text"
              required
              placeholder="User ID"
              autoComplete="off"
              name="userId"
              id="userid"
              value={users.email}
              onChange={handleUser}
            />
          </div>
          <div className="passwordIcon">
            <span>
              <FaLock />
            </span>
            <input
              type="Password"
              name="password"
              id="password"
              required
              value={users.password}
              placeholder="Password"
              onChange={handleUser}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default User;
