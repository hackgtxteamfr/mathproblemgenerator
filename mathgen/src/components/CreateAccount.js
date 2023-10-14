import React from 'react';

export default function CreateAccount() {
    return (
        <div>
            <h1>Create an Account</h1>
            
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"/>
            <label for="pass">Password:</label>
            <input type="text" id="pass" name="pass"/>
            <input type="submit" value="Submit"/>

        </div>
    );
}