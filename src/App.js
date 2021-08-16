import Navigbar from './Components/NavBar/Navbar/navigbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/NavBar/HomePage/HomePage';
import Footer from './Components/NavBar/Navbar/Footer';
import Contact from './Components/ContactUS/Contact';
import About from './Components/About/About';
import ScrollToTop from './Components/NavBar/Navbar/ScrollToTop';
import HomeSearch from './Components/ContactUS/homeSearch';
import React, { useState,useEffect } from 'react'
function App() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
      fetch('/home').then(
          response => response.json()).then(data => {
              setUserName(data)
              console.log(data)
          })
      },[]);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navigbar />
        <HomePage path="/" component={HomePage} exact />
        <HomeSearch path="/homesearch" component={HomeSearch} />
        <Contact path="/contact" component={Contact} />
        <About path="/about" component={About} />
        
        <Footer />
      </Router>


    </>

  );
}

export default App;
