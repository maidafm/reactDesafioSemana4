import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
/* import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage'; */
import Cart from './components/Cart';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div class="container-fluid">
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* {<Cart />} */}
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;