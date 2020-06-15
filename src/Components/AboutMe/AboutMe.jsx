import React from 'react';
import styles from './aboutme.module.css';

const AboutMe = () => (
  <div id="aboutme" className={styles.container}>
    <hr className={styles.hrText} data-content="About Me"></hr>
    <div className={styles.flexContainer}>
      <div className={styles.flexBox}>
        <p style={{ lineHeight: '1.3' }}>
          Hi, my name is Fatma Sümer, nice to meet you! For a year, I have honed my skills as a web
          developer, learning how to build web applications, both front-end and back-end.
        </p>
        <p style={{ lineHeight: '1.3' }}>
          In addition to web development, I am completing my master’s degree in Educational Studies
          at KU Leuven. I love building things for the web and working with{' '}
          <b>JavaScript (ES6+), HTML & CSS, React, Node.js, MySQL and MongoDB</b> recently.
        </p>{' '}
        <p style={{ lineHeight: '1.3' }}>
          I work well in a team, having collaborated with junior and senior developers in a range of
          projects.
        </p>
      </div>
      <img id="graysacele" className={styles.picture} src="./images-icons/IMG_6288.jpeg" alt="" />
    </div>
  </div>
);

export default AboutMe;
