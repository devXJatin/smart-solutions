import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      <Link to="home/studentlogin">
        <div className="student">
          <FontAwesomeIcon icon={faUser} className="student-icon" />
          <h2 className="student-head">Student</h2>
        </div>
      </Link>

      <div className="admin"></div>
    </div>
  );
}

export default Home;
