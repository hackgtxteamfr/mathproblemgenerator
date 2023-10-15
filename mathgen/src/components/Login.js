import React from 'react';
import Link from 'next/link'
import { useState } from 'react';
import axios from 'axios';


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
            <div>
                <Link href="./">{"< Back"}</Link>
            </div>
            <h1>Login Page</h1>

            <div>
                No account?
                <Link href="./create-account">Create Account</Link>
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
                        logIn(`./api/users/verify`, e, p)
                        //window.location.pathname = '/'
                    }}>Log In</button>

        </div>
    );
}