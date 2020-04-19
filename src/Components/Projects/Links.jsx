import React from 'react';

import styles from './projects.module.css';

const Links = props => {
  return (
    <div>
      {Object.entries(props.data).map(item =>
        item[0] === 'github' ? (
          <a href={item[1]}>
            {' '}
            <img className={styles.linkIcon} src="./images-icons/github.svg" alt="github icon" />
          </a>
        ) : (
          <a href={item[1]}>
            <img className={styles.linkIcon} src="./images-icons/link.png" alt="online link icon" />
          </a>
        ),
      )}
    </div>
  );
};

export default Links;
