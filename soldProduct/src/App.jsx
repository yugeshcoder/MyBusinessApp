import { useState } from 'react'
import './App.css'
import SoldContent from './soldContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SoldContent/>    
    </>
  )
}

export default App
