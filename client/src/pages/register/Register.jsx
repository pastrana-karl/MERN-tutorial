import { Link } from "react-router-dom"
import "./Register.css"

export default function Register() {
    return (
        <div className = "register" >
            <span className="registerTitle">Register</span>
            <form action="" className="registerForm">
                <label>Username</label>
                <input type="text" placeholder = "Enter your username..." />

                <label>Email</label>
                <input type="text" placeholder = "Enter your email..." />

                <label>Password</label>
                <input type="password" placeholder = "Enter your password..." />

                <button className = "registerButton" >Register</button>
            </form>

            <button className = "registerLoginButton" ><Link to = "/login" className = "link" >Log In</Link></button>
        </div>
    )
}
