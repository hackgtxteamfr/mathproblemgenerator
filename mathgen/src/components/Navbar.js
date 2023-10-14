import React from 'react';
import '../navbar.css';

export default function Navbar() {
    return (
        <div className="container">
            <div className="login">
                {/* find something better to put here */}
                <p>&nbsp;</p>
            </div>
            <h1>Math Problem Generator</h1>
            <div className="login">
                <a href="#">Login</a>
                <a href="#">
                    <img src="./profile.png" className="icon"/>
                </a>
            </div>
        </div>
    );
}