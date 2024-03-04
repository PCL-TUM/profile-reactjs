import { useState } from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className=''>
        <Navbar />
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App
