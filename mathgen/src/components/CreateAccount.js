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

async function createUser(url, fn, ln, e, p) {
        const res = await axios.post(url, {
            firstName: fn,
            lastName: ln,
            email: e,
            password: p
        })
    return res.data
}

export default function CreateAccount() {
    const [ fn, setFirstName ] = useState("")
    const [ ln, setLastName ] = useState("")
    const [ e, setEmail ] = useState("")
    const [ p, setPassword ] = useState("")

    return (
        <div>
            <Link href="./">{"< Back"}</Link>
            <h1>Create an Account</h1>
            
            <input type = "text"  placeholder="first name" value={fn}
                        onChange={(event) => {
                            setFirstName(event.target.value)
                        }} />
                    <input type = "text"  placeholder="last name" value={ln}
                        onChange={(event) => {
                            setLastName(event.target.value)
                        }} />
                    <input type = "text"  placeholder="email" value={e}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                    <input type = "text"  placeholder="password" value={p}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                    <button onClick={() => {
                        createUser(`../api/user`, fn, ln, e, p, 0)
                        logIn(`../api/user/verify`, e, p)
                    }}>Sign up</button>
        </div>
    );
}