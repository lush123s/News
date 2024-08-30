import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './App.css'
import Newscont from './Newscont'

function App() {
const [categary, setcategary] = useState('general')
  return (
    <>
     <Navbar setcategary={setcategary}/>
     <Newscont categary={categary}/>
    </>
  )
}

export default App
