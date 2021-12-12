
import React, { useState } from "react";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
function User() {
    const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });


  const handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async function(event){
    event.preventDefault();
    
    const {name, email, password, cpassword} = register;

    const response = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name, email, password, cpassword})
       
    });

    const data = await response.json();
    if(data.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration")
    }

    window.alert("Registration Successfull");
    console.log("Registration Successfull")
    console.log(data);

    navigate('/login');


    // const newRecords = { ...register, id: new Date().getTime().toString() };
    // setRecords([...records, { newRecords }]);
    // setRegister({ name: "", email:"", password: "", cpassword:"" });
  };
  return (
    <div>
      <div className="container">
        <div className="form-container sign-in-container">
          <form className="userLogin" onSubmit={handleSubmit} method="POST">
            <h1>Signup</h1>
            <div className="userIcon">
              <span className="inputIcon">
                <FaUser />
              </span>
              <input
                className="loginInput"
                type="text"
                required
                placeholder="Name"
                autoComplete="off"
                name="name"
                id="name"
                value={register.name}
                onChange={handleUserInput}
              />
            </div>
            <div className="userIcon">
              <span className="inputIcon">
                <FaEnvelope />
              </span>
              <input
                className="loginInput"
                type="email"
                required
                placeholder="Email"
                autoComplete="off"
                name="email"
                id="email"
                value={register.email}
                onChange={handleUserInput}
              />
            </div>
            <div className="passwordIcon">
              <span className="inputIcon">
                <FaLock />
              </span>
              <input
                className="loginInput"
                type="Password"
                name="password"
                id="password"
                required
                value={register.password}
                placeholder="Password"
                onChange={handleUserInput}
              />
            </div>
            <div className="passwordIcon">
              <span className="inputIcon">
                <FaLock />
              </span>
              <input
                className="loginInput"
                type="Password"
                name="cpassword"
                id="cpassword"
                required
                value={register.cpassword}
                placeholder="Confirm Password"
                onChange={handleUserInput}
              />
            </div>
            <h3>
              Already Registered? <NavLink to="/login">Log In</NavLink>
            </h3>
            <button type="submit" className="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
