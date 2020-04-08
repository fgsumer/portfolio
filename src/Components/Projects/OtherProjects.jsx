import React from 'react';

import Links from './Links.jsx';
import TechnologyUsed from './TechnologyUsed.jsx';

import styles from './otherprojects.module.css';

const OtherProjects = props => (
  <div className={styles.projectCard}>
    <div className={styles.links}>
      <Links data={props.data.link}></Links>
    </div>
    <div className={styles.description}>
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
    </div>
    <div className={styles.technology}>
      <TechnologyUsed data={props.data.technologyUsed} />
    </div>
  </div>
);

export default OtherProjects;
