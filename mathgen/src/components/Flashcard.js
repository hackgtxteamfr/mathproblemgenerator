import React from 'react';
import '../flashcard.css';

export default function Flashcard() {
    return (
        <div className="flashcard">
            <h1>2 + 2 =</h1>
            <div>
                <button>Answer 1</button>
                <button>Answer 2</button>
                <button>Answer 3</button>
                <button>Answer 4</button>
            </div>
        </div>
    );
}