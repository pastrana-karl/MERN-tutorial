import { useState } from "react"
import { useParams } from "react-router-dom"
import "./Password.css"
import axios from "axios";

export default function Password() {
    const [password, setPassword] = useState("");
    const { token } = useParams()
    console.log(token)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/auth/new-password", {
                password,
                token
            });

            res.data && window.location.replace("/login");
        } catch (err) {

        }

    };
    return (
        <div className = "password" >
            <span className="passwordTitle">Change Your password</span>
            <form action="" className="passwordForm" onSubmit = {handleSubmit}>
                <label>Password</label>
                <input type="password" placeholder = "Enter your new password..." onChange = {e => setPassword(e.target.value)} />

                <button className = "passwordButton" type = "submit" >Change Password</button>
            </form>

        </div>
    )
}
