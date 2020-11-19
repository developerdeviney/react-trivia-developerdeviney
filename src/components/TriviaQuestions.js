import React, { useEffect, useState } from 'react'

export default function TriviaQuestions(props) {
    const { category, clearSelectedCategory } = props
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&token=9309c4970258a820d41d680ebe09d27e494ac6b2c2875645ae432014fc822999')
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
                    <li key={[name.category]}>
                        <div>Question: {name.question}</div>


                    </li>
                ))}
            </ul>
        </div >
    )
}

//function generateUniqueData(arrayData) {
  //  const questionToCategory = {}

/* for (const record of originalData) {
     if (!questionToCategory[record.question]) {
         questionToCategory[record.question] = false
     }
     questionToCategory[record.question]
 }*/

/*const blah = []
for (const question1 of Object.keys(questionToCategory)) {
    blah.filter({ question: question1 })
}
return blah
}*/