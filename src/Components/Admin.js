import React from "react";
import "../App.css";
import { FaLock, FaUser } from "react-icons/fa";

function Admin() {
  return (
    <div className="container">
      <div className="form-container sign-in-container">
        <form className="userLogin">
          <h1>Admin</h1>
          <div className="adminIcon">
            <span>
              <FaUser />
            </span>
            <input type="text" required placeholder="Admin ID" />
          </div>
          <div className="passwordIcon">
            <span>
              {" "}
              <FaLock />
            </span>
            <input type="Password" required placeholder="Password" />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
