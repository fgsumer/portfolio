import React from 'react';
import styles from './aboutme.module.css';

const AboutMe = () => (
  <div id="aboutme" className={styles.container}>
    <hr className={styles.hrText} data-content="About Me"></hr>
    <div className={styles.flexContainer}>
      <div className={styles.flexBox}>
        <p style={{ lineHeight: '1.6' }}>
          Hi, my name is Fatma Sümer and I am novice front-end developer who is building a new
          career from the thing I really enjoy. For 8 months, I have honed my skills as a
          web-developer, learning how to build web applications with HTML, CSS, JavaScript, React,
          Node, databasing in MySQL and MongoDB while studying for my master’s degree in Educational
          Studies at KU Leuven.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          I've loved building things for web and been working with{' '}
          <span className={styles.underline}>
            JavaScript (ES6+), HTML & CSS, React, Node.js, MySQL and MongoDB
          </span>{' '}
          recently.
        </p>
      </div>
      <div>
        <img id="graysacele" className={styles.picture} src="./images-icons/IMG_6288.jpeg" alt="" />
      </div>
    </div>
  </div>
);

export default AboutMe;
