

import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './Components/login/Login';
import Register from './Components/register/Register'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Aboutus from './Components/Aboutus/Aboutus';
import Payments from './Components/Payments/Payments';
import Homeloan from './Components/homeloan/Homeloan';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/dashboard/Dashboard';



      export default function App() {
        return (
          <div>
    <ToastContainer
position="top-center"
theme="colored"/>
            <Router>
            
          <Header/><br></br><br></br>

          <Routes>
            <Route path="/"  element={<Home/>}/>
            {/* <Route path="/contact"  element={<Contact/>}/> */}
            <Route path="/about"  element={<Aboutus/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/payment" element={<Payments/>}/>
            <Route path="/homeloan" element={<Homeloan/>}/>
            {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
            <Route path="/dashboard" element={<Dashboard/>}/>

          </Routes>
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
          <br></br><br></br>
          <Footer/>
          </Router></div>
        )
      }


    
   