import React from 'react';

import data from '../../data.js';
import TechnologyUsed from './TechnologyUsed';
import Links from './Links.jsx';

import styles from './projects.module.css';

const Project = () => (
  <div className={styles.maincontainer}>
    <h1>Some Things I've built</h1>
    {data.map((d, key) => (
      <div className={styles.project}>
        <div className={styles.nameDescription}>
          <h1 key={key}>{d.name}</h1>
          <p>{d.description}</p>
        </div>

        <img className={styles.projectPhoto} src={d.projectPhoto} alt="project photo"></img>
        <div className={styles.technology}>
          <TechnologyUsed data={d.technologyUsed}></TechnologyUsed>
        </div>
        {/* <Links data={d.link}></Links> */}
      </div>
    ))}
  </div>
);

export default Project;
