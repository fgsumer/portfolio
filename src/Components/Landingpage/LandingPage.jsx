import React from 'react';

import NavBar from '../NavBar/NavBar';
import TypeWriter from './TypeWriter';
import AboutMe from '../AboutMe/AboutMe';
import VerticalNavBar from '../NavBar/VerticalNavBar';

import styles from './landingpage.module.css';

function LandingPage() {
  return (
    <>
      <div className={styles.container}>
        <NavBar></NavBar>
        <div className={styles.container2}>
          <h4>Hi, my name is </h4>
          <h1>Fatma Sümer</h1>
          <TypeWriter />
          <br></br>
          <h3> &#38; I love building things for the web.</h3>
          <VerticalNavBar></VerticalNavBar>
        </div>
      </div>
      <AboutMe></AboutMe>
      {/* <div className="container-3">
        <h3>About me</h3>
      </div>
      <div className="container-3">
        <h3>projects</h3>
      </div> */}
    </>
  );
}

export default LandingPage;
