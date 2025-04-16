import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
