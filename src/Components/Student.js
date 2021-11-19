import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-solid-svg-icons'
import "../App.css"
function Student() {
  return (
    <div>
        <FontAwesomeIcon icon={faUser} className="student-icon" />
        <h2 className="student-head">Student</h2>
    </div>
  );
}

export default Student;
