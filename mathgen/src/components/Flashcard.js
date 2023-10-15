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
        if (question.operator === "+") {
            answers.push({correct: true, value: question.first + question.second});
        } else if (question.operator === "-") {
            answers.push({correct: true, value: question.first - question.second});
        } else if (question.operator === '*') {
            answers.push({correct: true, value: question.first * question.second});
        } else if (question.operator === "/") {
            answers.push({correct: true, value: Math.floor(question.first / question.second)});
        } else {
            answers.push({correct: true, value: question.first % question.second});
        }
        let values = [];
        values.push(answers[0].value);
        while (values.length < 4) {
            let random = (Math.floor(Math.random() * 1000));
            if (!values.includes(random)) {
                values.push(random);
                answers.push({correct: false, value: random});
            }
        }
        // answers.forEach((value) => {
        //     console.log(value);
        // });
    }

    useEffect(() => {
        changeQuestion();
    }, []);

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