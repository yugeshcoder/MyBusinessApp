import { useState } from 'react'
import './App.css'
import SoldContent from './SoldContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SoldContent/>    
    </>
  )
}

export default App
