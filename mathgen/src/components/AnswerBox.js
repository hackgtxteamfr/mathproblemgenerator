import { useState, useEffect } from 'react';

export default function AnswerBox(props) {
    console.log(props.answers);
    return (
        <div>
            {
                
                props.answers.map((answer) => {
                    console.log(answer);
                    return((answer.correct) ? 
                    <button class="correctAnswer">{answer.value}</button> :
                    <button class="incorrectAnswer">{answer.value}</button>)
                })
            }
        </div>
    );
}