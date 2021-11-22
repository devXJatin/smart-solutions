import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
function Home() {
  return (
    <div>
      <Student />
      <Admin/>
      <div className="admin"></div>
    </div>
  );
}

export default Home;

export const Student = () => {
  return (
    <Link to="/home/user">
      <div className="student">
        {/* <FontAwesomeIcon icon={['fas', 'user-graduate']} className="student-icon" /> */}
        <FaUserGraduate className="student-icon" />
        <h2 className="student-head">Student</h2>
      </div>
    </Link>
  );
};

//Admin Component
export const Admin = () => {
  return (
    <Link to="home/admin">
      <div className="admin">
        {/* <FontAwesomeIcon icon={['fas', 'user-graduate']} className="student-icon" /> */}
        <FaUserTie className="student-icon" />
        <h2 className="admin-head">Admin</h2>
      </div>
    </Link>
  );
};
