import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
    return (
        <div className = "login" >
            <span className="loginTitle">Log In</span>
            <form action="" className="loginForm">
                <label>Email</label>
                <input type="text" placeholder = "Enter your email..." />

                <label>Password</label>
                <input type="password" placeholder = "Enter your password..." />

                <button className = "loginButton" >Log In</button>
            </form>

            <button className = "loginRegisterButton" ><Link to = "/register" className = "link" >Register</Link></button>
        </div>
    )
}
