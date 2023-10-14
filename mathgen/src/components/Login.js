import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

async function logIn(url, e, p) {
    const res = await axios.post(url, {
        email: e,
        password: p
    })
return res.data
}

export default function Login() {
    const [ e, setEmail ] = useState("")
    const [ p, setPassword ] = useState("")
    
    return (
        <div>
            <h1>Login Page</h1>

            <div>
                No account?
                <Link to="/create-account">
                    Create an account!
                </Link>
            </div>
            <label for="email">Email:</label>
            <input type = "text"  placeholder="email" value={e}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
            <label for="pass">Password:</label>
            <input type = "text" placeholder="password" value={p}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
            <button onClick={() => {
                        logIn(`../api/user/verify`, e, p)
                        window.location.pathname = '/'
                    }}>Log In</button>
        </div>
    );
}