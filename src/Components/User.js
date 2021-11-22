import React, {useState} from "react";
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
            <h1>User Login</h1>
            <input type="Email" required placeholder="Email" value={users.email} onChange={handleUsername}/>
            <input type="Password" required  value={users.password} placeholder="Password"/>
            <button type="submit">Log in</button>
        </form>
    </div>
    </div>
  );
}

export default User;
