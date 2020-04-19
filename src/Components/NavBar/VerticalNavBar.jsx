import React from 'react';

import styles from './verticalnavbar.module.css';

function VerticalNavBar() {
  return (
    <div className={styles.container1}>
      <a
        href="https://www.linkedin.com/in/fatmas%C3%BCmer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.icon1} src="/images-icons/linkedin.svg" alt="linkedin icon" />
      </a>
      <a href="https://github.com/fgsumer" target="_blank" rel="noopener noreferrer">
        <img className={styles.icon2} src="/images-icons/github.svg" alt="github icon" />
      </a>
      <a href="https://twitter.com/fatmaagocen" target="_blank" rel="noopener noreferrer">
        <img className={styles.icon3} src="/images-icons/twitter.png" alt="twitter icon"></img>
      </a>
      <a href="https://codepen.io/fsumer" target="_blank" rel="noopener noreferrer">
        <img className={styles.icon4} src="/images-icons/codepen.svg" alt="twitter icon"></img>
      </a>
      <div id={styles.verticalline}></div>
    </div>
  );
}

export default VerticalNavBar;
