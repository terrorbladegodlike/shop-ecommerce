import React from 'react';

// Import React Router DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// Import Components
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='overlow-hidden'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
};

export default App;
