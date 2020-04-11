import React from 'react';

import styles from './footer.module.css';
function Footer() {
  return (
    <>
      <h1 className={styles.p1}>Footer</h1>
      <div className={styles.footerContainer}>
        <a href="https://www.linkedin.com/in/fatmas%C3%BCmer/">
          <img className={styles.icon} src="/images-icons/linkedin.svg" alt="linkedin icon" />
        </a>
        <a href="https://github.com/fgsumer">
          <img className={styles.icon} src="/images-icons/github.svg" alt="github icon" />
        </a>
        <a href="https://twitter.com/fatmaagocen">
          <img className={styles.icon} src="/images-icons/twitter.png" alt="twitter icon"></img>
        </a>
        <a href="https://https://codepen.io/fsumer">
          <img className={styles.icon} src="/images-icons/codepen.svg" alt="twitter icon"></img>
        </a>
      </div>
    </>
  );
}

export default Footer;