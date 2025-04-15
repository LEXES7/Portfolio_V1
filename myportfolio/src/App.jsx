import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home'; // Ensure the component name is capitalized

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}