import React, { useEffect, useState } from 'react'
import Question from './Question'

export default function TriviaQuestions(props) {
    const { category, clearSelectedCategory } = props
    const [questions, setQuestions] = useState([])


    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10&category=${category.id}&token=d33784c6b9f69dd6dddd2683eaa4853c4c9ac748c602d871009f375cf98adf13`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
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
                {questions.map((question, index) => (
                    <Question question={question} questionNum={index} key={index} />
                ))}
            </ul>
        </div >
    )
}
