import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Time from './pages/Time'
import Weather from './pages/Weather'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/time" element={<Time/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
