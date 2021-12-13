import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
function Home() {
  return (
      <div className="home">
        <div className="headings">
        <h1 className="heading1">Welcome To The</h1>
        <h1 className="heading2"> Smart Solutions</h1>
        </div>
      </div>

    //   <div class="wrapper">
    // <div class="static-txt">Welcome To The </div>
    // <ul class="dynamic-txts">
    //   <li><span>Smart Solutions</span></li>
    //   </ul>
    // </div>
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
