import React from 'react';

import styles from './contactme.module.css';
function ContactMe() {
  return (
    <div id="contactme" className={styles.container}>
      <div className={styles.flexcontainer}>
        <h1 className={styles.h1}>Get in Touch</h1>
        <p className={styles.p}>
          I'm currently looking for opportunities, my inbox is always open whether for hiring me or
          just to talk. I'll answer your email!
        </p>
        <h3 style={{ fontSize: '1rem' }}>
          <a href="mailto:fatmagsumer@gmail.com" className={styles.underline}>
            Let's get in touch!
          </a>
        </h3>
      </div>
    </div>
  );
}

export default ContactMe;
