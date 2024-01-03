import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Podcasts from "./routes/podcasts";
import Resources from "./routes/resources";
import Blog from "./routes/blog";

function App() {
  

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/resources" element={<Resources/>} />
          <Route path="/podcasts" element={<Podcasts />}/>
        </Routes>
    </>
  )
}

export default App
