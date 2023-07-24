import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Cards from '../Cards/Cards';
import './App.css';

function App() {
    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Hero/>
          <Cards/>
        </div>
      </div>
    );
  }
  
  export default App;