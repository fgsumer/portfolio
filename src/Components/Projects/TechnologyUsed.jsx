import React from 'react';
import styles from './projects.module.css';

const TechnologyUsed = props => (
  <div>
    {props.data.map((item, key) => (
      <>
        <li className={styles.technology} key={key}>
          {item}
        </li>
      </>
    ))}
  </div>
);

export default TechnologyUsed;
