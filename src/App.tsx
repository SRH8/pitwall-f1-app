import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Constructors from './components/constructors/Constructors';
import Navbar from './components/navbar/Navbar';
import Drivers from './components/drivers/Drivers';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/constructors' element={<Constructors />} />
          <Route path='/drivers' element={<Drivers />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
