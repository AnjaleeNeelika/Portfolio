import React from 'react'
import Hero from './sections/Hero'
import AboutMe from './sections/AboutMe'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className='bg-[#070f2b] min-h-[100vh] h-fit'>
            <Navbar />            
            <Hero />
            <AboutMe />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App