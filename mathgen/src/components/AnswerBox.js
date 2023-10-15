import { useState, useEffect } from 'react';

export default function AnswerBox(props) {
    return (
        <div>
            {
                
                props.answers.map((answer) => {
                    return((answer.correct) ? 
                    <button class="correctAnswer">{answer.value}</button> :
                    <button class="incorrectAnswer">{answer.value}</button>)
                })
            }
        </div>
    );
}