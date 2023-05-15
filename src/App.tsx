import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="container">
      <Navbar links={["Home", "About", "Projects", "Contact"]}/>
      <Hero />
      <About />
      <Projects props = {['cake']}/>
    </div>
  );
}

export default App;
