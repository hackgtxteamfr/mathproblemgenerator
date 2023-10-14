import React from 'react';
import Link from 'next/link'

export default function Login() {
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
            <input type="text" id="email" name="email"/>
            <label for="pass">Password:</label>
            <input type="text" id="pass" name="pass"/>
            <input type="submit" value="Submit"/>

        </div>
    );
}