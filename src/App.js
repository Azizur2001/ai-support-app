import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Chat from './components/Chat';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
