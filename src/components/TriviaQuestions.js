import React, { useEffect, useState } from 'react'
//import Question from Question
export default function TriviaQuestions(props) {
    const { category, clearSelectedCategory } = props
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${category.id}&token=2fbcda84c0b0d24686725d8148d9a8736b80ec2c0f8a4da12b1f0cd9e05b9e9d`)
            .then(response => response.json())
            .then(data => {
                setQuestions((data.results))
            })
    }, [category])


    return (
        <div>
            <h2>{category.name}</h2>
            <button onClick={clearSelectedCategory}>
                Go back to all Categories
            </button>
            <ul>
                {questions.map((name) => (
                    <li key={[name.id]}>
                        <div>Question: {name.question}</div>
                        <div>Correct Answers: {name.correct_answer}</div>
                        <div>Incorrect Answers: {name.incorrect_answers}</div>

                    </li>
                ))}
            </ul>
        </div >
    )
}
