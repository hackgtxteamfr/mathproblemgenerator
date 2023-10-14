import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
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
            <input type="text" id="email" name="email"/>
            <label for="pass">Password:</label>
            <input type="text" id="pass" name="pass"/>
            <input type="submit" value="Submit"/>

        </div>
    );
}