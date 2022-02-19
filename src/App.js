import React from 'react';
import './App.css';
import HeaderScripts from './components/headers/headerScripts';
import FooterScripts from './components/headers/footerScripts';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Dashboard from './pages/dashboard';

  
function App() {
return (
    <Router>
  <HeaderScripts/>
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

    </Routes>
    <FooterScripts/>
    </Router>
);
}
  
export default App;