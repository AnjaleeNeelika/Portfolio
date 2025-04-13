import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Hero from './sections/Hero.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import AboutMe from './sections/AboutMe.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path='/' element={<Hero />} />
            <Route exact path='/about-me' Component={<AboutMe />} />
            <Route exact path='/experience' element={<Experience />} />
            <Route exact path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </BrowserRouter>,
)
