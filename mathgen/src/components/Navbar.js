import React from 'react';
import Fact from './Fact';
//import './navbar.css';
import Link from 'next/link'
import useSWR from 'swr'
import axios from 'axios';
import { useState } from 'react';
import auth from '../../server/utils/auth';


export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    
    try {
        auth(req)
    } catch (e) {
        return res.status(400).send("Not logged in as an admin")
    }

    const fetcher = async (url) => {
        const res = await axios.get(url)
        return res.data
    }

    if(loggedIn) {
        let { data, isLoading, isValidating } = useSWR(`./api/points`, fetcher)
        if (isLoading) return <div><h2>Loading</h2></div>

        return (
            <div className="navbar">
                <div className="login">
                    <p>&nbsp;</p>
                </div>
                <h1>Math Problem Generator</h1>
                <h2>{data}</h2>
                <div className="login">
                <Link href="./login">Login</Link>
                    <a href="#">
                        <img src="./profile.png" className="icon"/>
                    </a>
                </div>
            </div>
        );
    }

    if (!loggedIn) {
        return (
            <div className="navbar">
                <div className="login">
                    <p>&nbsp;</p>
                </div>
                <h1>Math Problem Generator</h1>
                <div className="login">
                <Link href="./login">Login</Link>
                    <a href="#">
                        <img src="./profile.png" className="icon"/>
                    </a>
                </div>
            </div>
        );
    }
}