import { useState } from "react"
import "./Reset.css"
import axios from "axios";

export default function Reset() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/auth/reset-password", {
                email,
            });

            res.data && window.location.replace("/login");
        } catch (err) {

        }

    };
    return (
        <div className = "reset" >
            <span className="resetTitle">Reset Password Request</span>
            <form action="" className="resetForm" onSubmit = {handleSubmit}>
                <label>Email</label>
                <input type="text" placeholder = "Enter your email..." onChange = {e => setEmail(e.target.value)} />

                <button className = "resetButton" type = "submit" >Reset</button>
            </form>

        </div>
    )
}
