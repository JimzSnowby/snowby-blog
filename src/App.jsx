import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu';
import Articles from './components/Articles';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="snowby-blog/" element={<Home />}/>
        <Route path="/article/:id" element={<ArticlePage />}/>
        <Route path="snowby-blog/about" element={<About />}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
    </div>
  );
}
  

export default App