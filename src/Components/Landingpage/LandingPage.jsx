import React from 'react';

import NavBar from '../NavBar/NavBar';
import TypeWriter from './TypeWriter';
import AboutMe from '../AboutMe/AboutMe';
import VerticalNavBar from '../NavBar/VerticalNavBar';
import Projects from '../Projects/Projects';

import styles from './landingpage.module.css';
import ContactMe from '../ContactMe/ContactMe';
// import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <>
      {/* styles.ontainer for landing page */}
      <div id="home" className={styles.container}>
        <NavBar></NavBar>
        <div className={styles.container2}>
          <p className={styles.hi}>Hi,{'      '} my name is </p>
          <h1 className={styles.h1}>Fatma Sümer</h1>
          {/* <h3 className={styles.h3}> &#38; I love building things for the web.</h3> */}
          <br></br>
          <TypeWriter />
          <VerticalNavBar></VerticalNavBar>
        </div>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
        {/*
         */}
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default LandingPage;
