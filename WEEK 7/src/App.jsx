import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile'
import BackgroundColorChanger from './components/BackgroundColorChanger/BackgroundColorChanger'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BackgroundColorChanger></BackgroundColorChanger>
    </>
  )
}

export default App
