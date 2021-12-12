import React from "react";
import './Dashboard.css'
import User from '../Assets/user.png'
function Dashboard() {
  return (
    <div>

        <div className="sideBar">
            <img className="profile_image" src={User}/>
            <center>
            <h4 className="h4">User</h4>
            <h4 className="h4">Enrollment No.</h4>
            </center>
            <a className="a" href="#">
          <i class="fas fa-desktop"></i>
          <span>Dashboard</span>
        </a>
        <a className="a" href="#">
          <i class="fas fa-history"></i>
          <span>Assignment History</span>
        </a>
        </div>
        <div class="content">
        <iframe
          src="https://www.onlinegdb.com/"
          frameborder=""
          height="40%"
          width="40%"
          className="frame"
        ></iframe>
      </div>
      {/* <div class="sidebar">
        <center>
          <img src="1.png" class="profile_image" alt="" />
          <h4>Mridul</h4>
          <h4>Enrollment Num</h4>
        </center>
        <a href="#">
          <i class="fas fa-desktop"></i>
          <span>Dashboard</span>
        </a>
        <a href="#">
          <i class="fas fa-history"></i>
          <span>Assignment History</span>
        </a>
      </div>

      <div class="content">
        <iframe
          src="https://www.onlinegdb.com/"
          frameborder=""
          height="40%"
          width="40%"
          class="frame"
        ></iframe>
      </div>
    </> */}
    </div>
  );
}

export default Dashboard;
