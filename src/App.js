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
function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Router>
        <ScrollToTop />
        <Navigbar />
        <Switch />
        <Route path="/" component={HomePage} exact >
          <HomePage />
        </Route>
        <Route>
          <HomeSearch path="/homesearch" component={HomeSearch} />
        </Route>
        <Route  >
          <Contact path="/contact" component={Contact} />
        </Route>
        <Route>
          <About path="/about" component={About} />
        </Route>
        <Switch />

        <Footer />
      </Router>


    </div>

  );
}

export default App;
