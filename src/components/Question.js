import { useState, useEffect, } from 'react'
import Submit from './SubmitAnswers'


function shuffleArray(array) {

    for (let origLocation = array.length - 1; origLocation > 0; origLocation--) {
        const newLocation = Math.floor(Math.random() * origLocation)
        const temp = array[origLocation]
        array[origLocation] = array[newLocation]
        array[newLocation] = temp
    }
}

export default function Question(props) {
    const { question, questionNum } = props
    const [chosenAnswer, setChosenAnswer] = useState(null)
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState([0])

    useEffect(() => {
        const answers = question.incorrect_answers.slice()
        answers.push(question.correct_answer)
        shuffleArray(answers)
        setShuffledAnswers(answers)
    }, [question])


    /*const handleAnswerButtonClick = (answerOption) => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion)
    }*/

    return (
        <li>
            <div>
                <h2>{question.question} </h2>
                <span dangerouslySetInnerHTML={{ __html: question.question }} />
            </div>
            <div>
                <ul>
                    {shuffledAnswers.map((answer, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    type='radio'
                                    name={'answer-' + questionNum}
                                    value={answer}
                                    checked={chosenAnswer === answer}
                                    onChange={() => setChosenAnswer(answer)}
                                />
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </li >
    )
}
