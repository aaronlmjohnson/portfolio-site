import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar links={["Home", "About", "Projects", "Contact"]}/>
      <Hero />
    </div>
  );
}

export default App;
