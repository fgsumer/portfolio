import React from 'react';

import styles from './footer.module.css';
function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/fatmas%C3%BCmer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icon} src="/images-icons/linkedin.svg" alt="linkedin icon" />
          </a>
          <a href="https://github.com/fgsumer" target="_blank">
            <img
              className={styles.icon}
              src="/images-icons/github.svg"
              alt="github icon"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://twitter.com/fatmaagocen" target="_blank">
            <img
              className={styles.icon}
              src="/images-icons/twitter.png"
              alt="twitter icon"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://https://codepen.io/fsumer" target="_blank">
            <img
              className={styles.icon}
              src="/images-icons/codepen.svg"
              alt="twitter icon"
              rel="noopener noreferrer"
            />
          </a>
        </div>
        <p>Designed & Built by Fatma Sümer ©2020 </p>
      </div>
    </>
  );
}

export default Footer;
