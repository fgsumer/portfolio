import React from 'react';

import { data, data2 } from '../../data.js';

import TechnologyUsed from './TechnologyUsed';
import Links from './Links.jsx';

import styles from './projects.module.css';
import OtherProjects from './OtherProjects.jsx';

const Project = () => (
  <>
    <div className={styles.maincontainer}>
      <hr className={styles.hrText} data-content="Some Things I've built"></hr>
      {/* <h1>Some Things I've built</h1> */}
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
          <div className={styles.projectLinks}>
            <Links data={d.link}></Links>
          </div>
        </div>
      ))}
    </div>

    <h1 style={{ textAlign: 'center', marginBottom: '4rem', fontFamily: 'Montserrat' }}>
      Other Projects
    </h1>
    <div className={styles.flexContainer}>
      {data2.map((d, key) => (
        <OtherProjects key={key} data={d}></OtherProjects>
      ))}
    </div>
  </>
);

export default Project;
