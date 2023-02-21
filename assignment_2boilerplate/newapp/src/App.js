import React from 'react';
import './App.css';
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import ReadNow from './Components/readNow/ReadNow';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Register from './Components/register/Register';
class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/read' element={<ReadNow/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      </Routes>
      <Footer />
    </div>
  }
}
export default App;
