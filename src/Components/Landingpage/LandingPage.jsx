import React from 'react';

import NavBar from '../NavBar/NavBar';
import TypeWriter from './TypeWriter';
import AboutMe from '../AboutMe/AboutMe';
import VerticalNavBar from '../NavBar/VerticalNavBar';
import Projects from '../Projects/Projects';

import styles from './landingpage.module.css';

function LandingPage() {
  return (
    <>
      {/* styles.ontainer for landing page */}
      <div className={styles.container}>
        <NavBar></NavBar>
        <div className={styles.container2}>
          <h3 className={styles.h3}>Hi, my name is </h3>
          <h1 className={styles.h1}>Fatma Sümer</h1>
          <TypeWriter />
          <br></br>
          <h3 className={styles.h3}> &#38; I love building things for the web.</h3>
          <VerticalNavBar></VerticalNavBar>
        </div>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </div>
    </>
  );
}

export default LandingPage;
