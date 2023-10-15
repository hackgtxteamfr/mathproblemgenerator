import React from 'react';
import Fact from './Fact';
//import './navbar.css';
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className="navbar">
            <div className="login">
                <p>&nbsp;</p>
            </div>
            <h1>Math Problem Generator</h1>
            <div className="login">
            <Link href="./login" className="logBut">Login</Link>
                <a href="#">
                    <img src="./profile.png" className="icon"/>
                </a>
            </div>
        </div>
    );
}