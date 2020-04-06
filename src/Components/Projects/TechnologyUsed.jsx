import React from 'react';

const TechnologyUsed = props => (
  <div style={{ color: 'yellow' }}>
    <h3>Technology Used</h3>
    {props.data.map((item, key) => (
      <>
        <li key={key}>{item}</li>
      </>
    ))}
  </div>
);

export default TechnologyUsed;
