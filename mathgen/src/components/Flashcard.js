import { useState, useEffect } from 'react';
import AnswerBox from './AnswerBox';

export default function Flashcard() {
    const operators = ["+", "-", "*", "/", "%"];
    const [question, setQuestion] = useState({first: 0, second: 0, operator: operators[0]});
    const [answers, setAnswers] = useState([])

    function changeQuestion() {
        setQuestion({first: Math.floor(Math.random() * 1000), second: Math.floor(Math.random() * 1000), operator: operators[Math.floor(Math.random() * 5)]});
    }

    function createAnswers() {
        let actual = []; // Clear the previous answers

    let correctAnswer;
    if (question.operator === "+") {
        correctAnswer = question.first + question.second;
    } else if (question.operator === "-") {
        correctAnswer = question.first - question.second;
    } else if (question.operator === '*') {
        correctAnswer = question.first * question.second;
    } else if (question.operator === "/") {
        correctAnswer = Math.floor(question.first / question.second);
    } else {
        correctAnswer = question.first % question.second;
    }

    actual.push({ correct: true, value: correctAnswer });

    while (actual.length < 4) {
        let random = Math.floor(Math.random() * 1000);
        if (random !== correctAnswer && !actual.some(answer => answer.value === random)) {
            actual.push({ correct: false, value: random });
        }
    }
    // Shuffle the answers randomly
    actual.sort(() => Math.random() - 0.5);
    setAnswers(actual)
    }

    useEffect(() => {
        changeQuestion();
    }, []);
    let actual = []
    useEffect(() => {
        createAnswers();
    }, [question.first]);
    return (
        
        <div className="flashcard">
            
            <h1>{question.first} {question.operator} {question.second}</h1>
            <AnswerBox answers={answers} />
        </div>
    );
}