import React from 'react';

import NavBar from '../NavBar/NavBar';
import TypeWriter from './TypeWriter';
import VerticalNavBar from '../NavBar/VerticalNavBar';

import './landingpage.css';

function LandingPage() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="container-2">
        <h1>Hi! My name is Fatma Sümer </h1>
        <TypeWriter />
        <br></br>
        <h3>I love building things for the web.</h3>
        <VerticalNavBar></VerticalNavBar>
      </div>
    </div>
  );
}

export default LandingPage;
