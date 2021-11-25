import React, {useState} from "react";
import {FaLock, FaUser} from 'react-icons/fa'
import "../App.css"
function User() {
    const [users, setUsers] = useState({
        email :'',
        password: ''
    })

    const handleUsername = (event)=>{


    }


    const handleSubmit = (event)=>{
        event.preventDefault();
    }
  return (
      <div  className="container">
    <div className="form-container sign-in-container">
        <form className="userLogin" onSubmit={handleSubmit}>
            <h1>User</h1>
            <div className="userIcon">
            <span><FaUser/></span>
            <input type="text" required placeholder="User ID" value={users.email} onChange={handleUsername}/>
            </div>
            <div className="passwordIcon">
            <span> <FaLock/></span>
            <input type="Password" required  value={users.password} placeholder="Password"/>
            </div>
            <button type="submit">Log in</button>
        </form>
    </div>
    </div>
  );
}

export default User;
