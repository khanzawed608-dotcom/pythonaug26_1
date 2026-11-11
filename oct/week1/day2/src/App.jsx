import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

import About from './About'
import './App.css'
import Home from './Home'

function App() {

  let a=10;

  return (
    <div>
      Hello

      <div>
        Welcome
      </div>

      <Home v={a}  str={"this is my string"} arr={[1,2,3]} obj={{name:'xyz',age:40}}/>
      <About/>
    </div>
  )
}

export default App
}

export default App
