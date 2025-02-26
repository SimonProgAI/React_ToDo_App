import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="contactform" element={<ContactForm />} />


        </Routes>
    </BrowserRouter>

  )
}

export default App;
