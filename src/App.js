import Navigbar from "./Components/NavBar/Navbar/navigbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/NavBar/Navbar/Footer";
import Contact from "./Components/ContactUS/Contact";
import About from "./Components/About/About";
import ScrollToTop from "./Components/NavBar/Navbar/ScrollToTop";
import HomeSearch from "./Components/ContactUS/homeSearch";
import React, { useState, useEffect } from "react";
import HomepageNav from "./Components/HomePage/homepageNav";
import Buyer from "./Components/Buyer/Buyer";
import Admin from "./Components/Admin/Admin";
import AdminConsole from "./Components/Admin/AdminConsole";

function App() {
  const [authorized, setAuth] = useState(true)
  return (
    <div className="d-flex flex-column h-100">
      <Router>
        <ScrollToTop />
        <Navigbar />
        <Switch />
        <Route path="/" component={HomePage} exact>
          <HomePage />
        </Route>
        <Route path="/" component={HomeSearch} exact>
          <HomeSearch />
        </Route>
        <Route path="/" component={Contact} exact>
          <Contact />
        </Route>
        <Route path="/" component={About} exact>
          <About />
        </Route>
        <Route path="/buyer" component={Buyer} exact></Route>
        <Route path="/admin" component={Admin} exact></Route>
        <Route path="/console" component={ () => <AdminConsole authorized = {authorized}/>} exact/>

        <Switch />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
