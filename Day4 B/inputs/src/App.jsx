import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: "column", gap: 20 }}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' onChange={(event) => {
          setName(event.target.value)
        }} />
        <button onClick={() => {
          console.log('✌️name --->', name);

        }}>Submit</button>
      </div>
    </div>
  )
}

export default App
