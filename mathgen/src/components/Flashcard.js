import { useState, useEffect } from 'react';

export default function Flashcard() {
    const operators = ["+", "-", "*", "/", "%"];
    const [question, setQuestion] = useState({first: 0, second: 0, operator: operators[0]});
    const [answer, setAnswer] = useState(0);

    function changeQuestion() {
        setQuestion({first: Math.floor(Math.random() * 1000), second: Math.floor(Math.random() * 1000), operator: operators[Math.floor(Math.random() * 5)], answer: 0});
    }

    function solve() {
        if (question.operator === "+") {
            setAnswer(question.first + question.second);
        } else if (question.operator === "-") {
            setAnswer(question.first - question.second);
        } else if (question.operator === '*') {
            setAnswer(question.first * question.second);
        } else if (question.operator === "/") {
            setAnswer(question.first / question.second);
        } else if (question.operator === '%') {
            setAnswer(question.first % question.second);
        } else {
            console.log("ERROR");
        }
    }

    useEffect(() => {
        changeQuestion();
    }, []);

    useEffect(() => {
        solve();
    }, [question]);

    return (
        <div className="flashcard">
            <h1>{question.first} {question.operator} {question.second}</h1>
            <div>
                <button>{answer}</button>
                <button>Answer 2</button>
                <button>Answer 3</button>
                <button>Answer 4</button>
            </div>
        </div>
    );
}