import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';     
import Products from './assets/products.jsx'; 
import AddProducts  from './assets/AddProducts.jsx';

function Home() {
  return (
    <div className="container mt-5">
      <div id='HomePlaceholder'>
        <h1 className='text-center'>FakeStore App</h1>
        <h2 className='TempHeading'>Welcome Home</h2>
        <p>This is a home page!</p>
        <p>...Or at least it would be if this was a real webpage</p>
        <br />
        <p>Click on the links above to navigate to the Products or Add Products pages.</p>
        <p><i>Note: This is a fake store app, so the products are not real. Additionally, there is no add to cart feature.</i></p>
      </div>
      
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-products">Add Products</Link>
            </li>
          </ul>

          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-products" element={<AddProducts />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
