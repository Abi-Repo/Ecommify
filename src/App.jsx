import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Productlist from './Components/Productlist';
import Productdetails from './Components/Productdetails';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Notfound from './Components/Notfound';
import Contact from './Components/Contact';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='*' element={<Notfound/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route index element={< Productlist />} />
            <Route path="details" element={<Productdetails />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App