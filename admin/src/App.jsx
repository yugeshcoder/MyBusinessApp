import { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Nav/>
    </>
  )
}

export default App
