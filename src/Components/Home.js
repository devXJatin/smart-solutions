import React from "react";
import { Link } from "react-router-dom";
import {FaUserGraduate} from 'react-icons/fa';
function Home() {
  return (
    <div>
      <Link to="home/studentlogin">
        <div className="student">
          {/* <FontAwesomeIcon icon={['fas', 'user-graduate']} className="student-icon" /> */}
          <FaUserGraduate className="student-icon"/>
          <h2 className="student-head">Student</h2>
        </div>
      </Link>

      <div className="admin"></div>
    </div>
  );
}

export default Home;
