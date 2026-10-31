import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience';
import Contact from "./components/contact/Contact";
import './App.scss'
const App = () => {
  return (
    <div className="app1">
      <Header />
      <Home />
      <Skills/>
      <Projects/>
      <Experience />
      <Contact />
    </div>
  )
}

export default App