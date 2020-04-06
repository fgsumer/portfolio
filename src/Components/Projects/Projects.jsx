import React from 'react';

import data from '../../data.js';
import styles from './projects.module.css';
import TechnologyUsed from './TechnologyUsed';
import Links from './Links.jsx';

const Project = () => (
  <main>
    <div className={styles.mainContainer}>
      <h1>Some Things I've built</h1>
      {data.map((d, key) => (
        <div className={styles.projectContainer}>
          <h1 key={key}>{d.name}</h1>
          <p>{d.description}</p>
          <img className={styles.image} src={d.projectPhoto} alt="project photo"></img>
          <TechnologyUsed data={d.technologyUsed}></TechnologyUsed>
          <Links data={d.link}></Links>
        </div>
      ))}
    </div>
  </main>
);

export default Project;
