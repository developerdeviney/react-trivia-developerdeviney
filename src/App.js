/* globals fetch */

import 'tachyons'
import { useEffect, useState } from 'react'

function App() {
  const [triviaCat, setTriviaCat] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => setTriviaCat(data.trivia_categories))
  }, [])

  return (
    <div classname trivia>
      <ul>
        {triviaCat.map((name) => (
          <li key={name.name}>{name.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
