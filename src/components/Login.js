import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Login.css";

export function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
       setToken(token);
    }
    async function loginUser(credentials) {
        console.log(credentials);
        return fetch('https://localhost:7114/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
            .then(res => {
                if (res) {
                    console.log('ok');
                }
            })
            
    }

    Login.propTypes = {
        setToken: PropTypes.func.isRequired
    }

    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <div className="Login">
                <form onSubmit={handleSubmit}>
                    <div>
                <label>
                            UserName:
                            <br/>
                            <input type="text" onChange={e => setUserName(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                <label>
                        Password:
                        <br/>
                            <input type="password" onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <br/>
                <div>
                        <input type="submit" value="Submit" />
                 </div>
            </form>
            </div>
            </div>
    )
}

