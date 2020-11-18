import React, { useEffect, useState } from 'react'

const TriviaQuestions = (props) => {
    const { category, clearSelectedCategory } = props
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
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
                        <div>Category: {name}</div>
                        <div>Question: {name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TriviaQuestions
