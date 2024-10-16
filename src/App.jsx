import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
   <div className="App">
    <Routes>
      <Route path="snowby-blog/" element={<Home />}/>
      <Route path="snowby-blog/about" element={<About />}/>
      <Route path="*" element={<h1>404 Not Found</h1>}/>
    </Routes>
   </div>
   );
  }
  

export default App