import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';
import AnotherPage from './pages/AnotherPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/another" element={<AnotherPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
