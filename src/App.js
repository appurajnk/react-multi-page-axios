import React from 'react';
import './App.css';
import HeaderScripts from './components/headers/headerScripts';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';

  
function App() {
return (
    <Router>
  <HeaderScripts/>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />

    </Routes>
    </Router>
);
}
  
export default App;