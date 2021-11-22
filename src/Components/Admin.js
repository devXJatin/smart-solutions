import React from 'react'
import "../App.css"

function Admin() {
    return (
        <div  className="container">
        <div className="form-container sign-in-container">
            <form className="userLogin" >
                <h1>Admin Login</h1>
                <input type="Email" required placeholder="Email" />
                <input type="Password" required  placeholder="Password"/>
                <button type="submit">Log in</button>
            </form>
        </div>
        </div>
    )
}

export default Admin
