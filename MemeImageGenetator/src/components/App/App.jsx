import React from "react";
import './App.css'
import Header from '../Header/Header'
import Meme from "../Meme/Meme";
import App2 from "../App2/App2";

function App() {
  return (
    <div className="main">
        <div className="App">
          <Header/>
          <Meme/>
        </div>
        <App2 />
    </div>
  );
}

export default App;