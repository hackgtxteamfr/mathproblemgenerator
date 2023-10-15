<<<<<<< Updated upstream
import React from 'react';
//import './flashcard.css';

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
=======
import { useState, useEffect } from 'react';
import AnswerBox from './AnswerBox';

export default function Flashcard() {
    const operators = ["+", "-", "*", "/", "%"];
    const [question, setQuestion] = useState({first: 0, second: 0, operator: operators[0]});
    let answers = [];

    function changeQuestion() {
        setQuestion({first: Math.floor(Math.random() * 1000), second: Math.floor(Math.random() * 1000), operator: operators[Math.floor(Math.random() * 5)]});
    }

    function createAnswers() {
        console.log("Ran");
        while (answers.length < 4) {
            if (question.operator === "+") {
                answers.push({correct: true, value: question.first + question.second});
            } else if (question.operator === "-") {
                answers.push({correct: true, value: question.first - question.second});
            } else if (question.operator === '*') {
                answers.push({correct: true, value: question.first * question.second});
            } else if (question.operator === "/") {
                answers.push({correct: true, value: question.first / question.second});
            } else {
                answers.push({correct: true, value: question.first % question.second});
            }
            let random = (Math.floor(Math.random() * 1000)) * Math.sign(answers[0]);
            while (random !== 0 && random !== answers[0]) {
                random = (Math.floor(Math.random() * 1000)) * Math.sign(answers[0]);
            }
            answers.push({correct: false, value: random});
            if (random === 0) {
                answers.push({correct: false, value: Math.random() * 1000});
            }
            if (answers[0].value !== 0 || answers[1].value !== 0) {
                if (question.operator === "/" || question.operator === "%") {
                    answers.push({correct: false, value: 0});
                }
            } else if (answers[0].value !== 1 || answers[1].value !== 1) {
                answers.push({correct: false, value: 1});
            }
            if (random !== answers[0].value - 1 && answers[0].value - 1 !== 0 && answers[0].value - 1 !== 1) {
                answers.push({correct: false, value: answers[0] - 1});
            }
            while (answers.length < 4) {
                let random2 = (Math.floor(Math.random() * 1000));
                if (answers[0].value !== random2 && answers[1].value !== random2 && answers[2].value !== random2) {
                    answers.push({correct: false, value: random2});
                }
            }
        }
    }

    useEffect(() => {
        changeQuestion();
    }, []);

    useEffect(() => {
        // createAnswers();
    }, [question]);

    return (
        <div className="flashcard">
            <h1>{question.first} {question.operator} {question.second}</h1>
            <AnswerBox answers={answers} />
>>>>>>> Stashed changes
        </div>
    );
}