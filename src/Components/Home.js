import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import Background from "../Assests/bg-img1.png";
function Home() {
  return (
    <div className="bgHome">
      <User />
      <Admin/>
    </div>
  );
}

export default Home;

//Student
export const User = () => {
  return (
    <NavLink to="/home/user" className="userLink">
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
    <NavLink to="home/admin" className="adminLink">
      <div className="admin">
        <FaUserTie className="icon" />
        <h2 className="admin-head">Admin</h2>
      </div>
    </NavLink>
  );
};
