import React from 'react';

import styles from './links.module.css';
const Links = props => {
  return (
    <div>
      <h3 className={styles.a}>Links</h3>
      {Object.entries(props.data).map(item =>
        item[0] === 'github' ? (
          <li className={styles.a}>
            <a href={item[1]}>{item[0]}</a>
          </li>
        ) : (
          <li className={styles.b}>
            <a href={item[1]}>{item[0]}</a>
          </li>
        ),
      )}
    </div>
  );
};

export default Links;
