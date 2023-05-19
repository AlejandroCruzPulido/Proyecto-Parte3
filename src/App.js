import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Helicopters from './pages/helicopters/Helicopters';
import Pilots from './pages/pilots/Pilots';
import Comments from './pages/comments/Comments';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/helicopters" element={<Helicopters/>} />
          <Route exact path='/pilots' element={<Pilots/>} />
          <Route exact path='/comments' element={<Comments/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
