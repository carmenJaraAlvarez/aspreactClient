import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Login.css";
//import MD5 from "crypto-js/md5";

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
       
    }
    function setSToken(userToken) {
        sessionStorage.setItem('token', JSON.stringify(userToken));
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
                    const rol = res.roles[0];
                    console.log(rol);
                    setToken("111");
                    setSToken("111");

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
                            <input type="password" onChange={e => {
                                var md5 = require('md5');
                                let hashed = md5(e.target.value);
                                setPassword(hashed);

                            }} />
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

