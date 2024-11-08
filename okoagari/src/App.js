import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
