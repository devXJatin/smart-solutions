import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "../App.css";
function User() {
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });

  const [records, setRecords] = useState([{}]);

  const handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecords = { ...user, id: new Date().getTime().toString() };
    setRecords([...records, {newRecords}]);  setUser({userId: "", password:""});
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
              value={user.userId}
              onChange={handleUserInput}
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
              value={user.password}
              placeholder="Password"
              onChange={handleUserInput}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default User;
