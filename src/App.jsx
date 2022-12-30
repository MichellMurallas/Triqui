import { useState } from 'react'
import './App.css'

function App() {
  const [turn, setTurn] = useState("X")
  const [squares, setSquares] = useState({
    X: 0,
    O: 0
  });

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  )
}

export default App
