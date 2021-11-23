import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
function Home() {
  return (
    <div>
      <Student />
      <Admin/>
    </div>
  );
}

export default Home;


//Student 
export const Student = () => {
  return (
    <NavLink to="/home/user" activeClassName="active">
      <div className="user">
        <FaUserGraduate className="icon" />
        <h2 className="user-head">User</h2>
      </div>
    </NavLink>
  );
};

//Admin Component
export const Admin = () => {
  return (
    <NavLink to="home/admin">
      <div className="admin">
        <FaUserTie className="icon" />
        <h2 className="admin-head">Admin</h2>
      </div>
    </NavLink>
  );
};
