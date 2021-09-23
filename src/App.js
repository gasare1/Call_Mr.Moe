import Navigbar from './Components/NavBar/Navbar/navigbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import Footer from './Components/NavBar/Navbar/Footer';
import Contact from './Components/ContactUS/Contact';
import About from './Components/About/About';
import ScrollToTop from './Components/NavBar/Navbar/ScrollToTop';
import HomeSearch from './Components/ContactUS/homeSearch';
import React, { useState, useEffect } from 'react'
import HomepageNav from './Components/HomePage/homepageNav';
import Buyer from './Components/Buyer/Buyer';
function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Router>
        <ScrollToTop />
        
        <Switch />
        <Navigbar />
        <Route path="/" component={HomePage} exact />
        <Route path="/" component={HomeSearch} exact/> 
        <Route path="/" component={Contact} exact />
        <Route path="about" component={About} exact/> 
        <Route path="/buyer" component={Buyer} exact/> 
        <Switch />

        <Footer />
      </Router>


    </div>

  );
}

export default App;
