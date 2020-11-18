import React, { useEffect, useState } from 'react'

const TriviaQuestions = (props) => {
    const { category, clearSelectedCategory } = props

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${category.id}&token=4f72e1ac6404a03be6a394fc6722683a59dc5924033a7657221d64d63827a7d5`)
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
                    <li key={name.category}>
                        <div>Category: {category.name}</div>
                        <div>Question: {questions.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TriviaQuestions
