import React from 'react';
import styles from './aboutme.module.css';

const AboutMe = () => (
  <div className={styles.container}>
    <hr style={{ marginTop: '20rem' }} className={styles.hrText} data-content="About Me"></hr>
    <div className={styles.flexContainer}>
      <div className={styles.flexBox}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime ipsum nihil recusandae
          corrupti ut minus aliquam, saepe similique, facere earum soluta cupiditate vero! Minima
          corrupti dicta odit nulla perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. A maxime ipsum nihil recusandae corrupti ut minus aliquam, saepe similique, facere
          earum soluta cupiditate vero! Minima corrupti dicta odit nulla perspiciatis.
        </p>
        <p>
          I've been working with{' '}
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
