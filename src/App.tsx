import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Constructors from './components/constructors/Constructors';
import Navbar from './components/common/navbar/Navbar';
import Drivers from './components/drivers/Drivers';
import Footer from './components/common/footer/Footer';
import About from './components/about/About';
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
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
