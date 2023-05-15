import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Navbar links={["Home", "About", "Projects", "Contact"]}/>
      <Hero />
      <About />
      <Projects props = {['cake']}/>
      <Contact />
    </div>
  );
}

export default App;
