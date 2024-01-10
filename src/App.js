import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Oop from './pages/Oop';
import Dsa from './pages/Dsa';
import Dbms from './pages/Dbms';
import Ps from './pages/Ps';
import Ciq from './pages/Ciq';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oops/*" element={<Oop selectedTopic="Introduction" />} />
        <Route path="/dsa/*" element={<Dsa selectedTopic="null" />} />
        <Route path="/dbms/*" element={<Dbms selectedTopic="null" />} />
        <Route path="/ps/*" element={<Ps selectedTopic="null" />} />
        <Route path="/ciq/*" element={<Ciq selectedTopic="null" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
