import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', marginLeft: '800px'}}>
      <h1>Contador React</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Sumar +1</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Restar -1</button>
    </div>
  )
}

export default App
