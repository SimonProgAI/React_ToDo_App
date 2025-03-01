import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

import TaskInput from './components/TaskInput.js';
import TaskList from './components/TaskList.js';

import './App.css';

function App() {
    
  return (
    /*<div>
        <TaskInput />
        <TaskList />
    </div>*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
