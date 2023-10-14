import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link'

async function logIn(url, e, p) {
    const res = await axios.post(url, {
        email: e,
        password: p
    })
return res.data
}

async function createUser(url, fn, ln, e, p, pts) {
        const res = await axios.post(url, {
            firstName: fn,
            lastName: ln,
            email: e,
            password: p,
            points: pts
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
            <div>
                <Link href="./">{"< Back"}</Link>
            </div>
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
                        createUser(`../pages/api/user`, fn, ln, e, p, 0)
                        logIn(`../pages/api/user/verify`, e, p)
                        window.location.pathname = '/'
                    }}>Sign up</button>
        </div>
    );
}