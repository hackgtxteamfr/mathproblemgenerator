import React from 'react';
import Fact from './Fact';
import '../navbar.css';
import { Link } from "react-router-dom";

const handleClick = (e) => {
    
  }

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="login">
                <p>&nbsp;</p>
            </div>
            <h1>Math Problem Generator</h1>
            <div className="login">
                <Link to="/login">
                    Login
                </Link>
                <a href="#">
                    <img src="./profile.png" className="icon"/>
                </a>
            </div>
        </div>
    );
}