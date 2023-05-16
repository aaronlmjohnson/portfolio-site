import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectData from './assets/data/ProjectData';

function App() {
  return (
    <div className="container">
      <Navbar links={["Home", "About", "Projects", "Contact"]}/>
      <Hero />
      <About />
      <Projects projectData = {ProjectData}/>
      <Contact />
    </div>
  );
}

export default App;
