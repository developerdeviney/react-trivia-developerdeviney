/* globals fetch */

import 'tachyons'
import React, { useEffect, useState } from 'react'
// Import Components Below
import TriviaQuestions from './components/TriviaQuestions'

const App = () => {
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
    <div>
      {triviaCat.map((categories) => (
        <button key={categories.id} onClick={() => setTriviaCat(categories)}>{categories.name}</button>
      ))}
    </div>
  )
}

export default App
