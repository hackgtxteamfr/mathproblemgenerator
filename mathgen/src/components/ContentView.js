import React from 'react';
import Fact from "./Fact";
import Flashcard from "./Flashcard";

export default function ContentView() {
    return (
        <div className="container">
            <Fact />
            <Flashcard />
        </div>
    );
}