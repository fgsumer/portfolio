import React from 'react';

import TechnologyUsed from './TechnologyUsed';
import Links from './Links.jsx';
import OtherProjects from './OtherProjects.jsx';

import styles from './projects.module.css';
import { data, data2 } from '../../data.js';

const Project = () => (
  <>
    <div id="projects" className={styles.maincontainer}>
      <hr className={styles.hrText} data-content="Projects I've contributed to"></hr>
      {data.map((d, key) => (
        <div className={styles.project}>
          <div className={styles.nameDescription}>
            <h1 key={key}>{d.name}</h1>
            <p>{d.description}</p>
          </div>
          <div className={styles.photowrapper}>
            <img className={styles.projectPhoto} src={d.projectPhoto} alt="project"></img>
          </div>

          <div className={styles.technology}>
            <TechnologyUsed data={d.technologyUsed}></TechnologyUsed>
          </div>
          <div id="linkid" className={styles.projectLinks}>
            <Links data={d.link}></Links>
          </div>
        </div>
      ))}
    </div>

    <h1 className={styles.h1}>Other Projects</h1>
    <div className={styles.flexContainer}>
      {data2.map((d, key) => (
        <OtherProjects key={key} data={d}></OtherProjects>
      ))}
    </div>
  </>
);

export default Project;
