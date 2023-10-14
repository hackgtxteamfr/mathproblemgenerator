import React from 'react';
import Fact from "./Fact";
import Flashcard from "./Flashcard";
import Navbar from './Navbar';
import ContentView from './ContentView';
import "../Home.css"

export default function Home() {
    return (
        <div className="App">
			<Navbar />
			<ContentView />
        </div>
    );
}