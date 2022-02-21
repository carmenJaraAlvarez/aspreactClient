import React, { useState } from "react";

import "./Login.css";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        console.log('submitted')
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input type="text"  />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <button>b</button>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
