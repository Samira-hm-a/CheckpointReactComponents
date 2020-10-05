import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import ProfilPhoto from './Components/Profile/ProfilPhoto'
import FullName from './Components/Profile/FullName'
import Address from './Components/Profile/Address'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />

      <div className="container-banner">
      <ProfilPhoto/>
      <br/>
      <FullName/>
      <br/>
      <Address/>
      <br/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
