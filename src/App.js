/* globals fetch */
import 'tachyons'
import React, { useEffect, useState } from 'react'
// Import Components Below
import TriviaQuestions from './components/TriviaQuestions'


function App() {
  const [triviaCat, setTriviaCat] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) =>
        setTriviaCat(data.trivia_categories))
  }, [])

  if (selectedCategory) {
    return (
      <TriviaQuestions
        category={selectedCategory}
        clearSelectedCategory={() => setSelectedCategory(null)}
      />
    )
  }

  return (

    <div className='App'>
      <h2 >Trivia</h2>
      <ul>
        {triviaCat.map((category) => (
          <li className='list' key={category.id}>
            <button
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default App
