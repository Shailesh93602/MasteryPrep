import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Oop from './pages/Oop';
import Dsa from './pages/Dsa';
import Sql from './pages/Sql';
import Ps from './pages/Ps';
import Ciq from './pages/Ciq';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oops/*" element={<Oop selectedTopic="null" />} />
        <Route path="/dsa/*" element={<Dsa selectedTopic="null" />} />
        <Route path="/sql/*" element={<Sql selectedTopic="null" />} />
        <Route path="/ps/*" element={<Ps selectedTopic="null" />} />
        <Route path="/ciq/*" element={<Ciq selectedTopic="null" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
