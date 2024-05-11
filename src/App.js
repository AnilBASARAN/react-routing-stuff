import './App.css';
import Dog from './Dog';
import About from './About';
import HomePage from './HomePage';
import React, { Component } from 'react';
import {  Routes, Route,NavLink } from "react-router-dom";



const Hater = () => <h1>I ABSOLUTELY hate DOGS</h1>;

class App extends Component {
  render() {
    return (
      
        <div className='App'>
          <nav>
        <NavLink   activeClassName="active-link" to="/">About</NavLink>
        <NavLink   activeClassName="active-link" to="/dog">Dog</NavLink>
        <NavLink   activeClassName="active-link" to="/dog/hater">Hater</NavLink>
        <NavLink   activeClassName="active-link" to="/home-page">Home</NavLink>
        </nav>

         <Routes>
            <Route  path="/" element={<About/>} />
            <Route  path="/dog" element={<Dog/>} />
            <Route  path="/dog/hater" element={<Hater/>} />
            <Route  path="/home-page" element={<HomePage/>} />
           
            </Routes>
        </div>
   
    );
  }
}

export default App;
