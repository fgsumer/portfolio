import React from 'react';

import './verticalnavbar.css';

function VerticalNavBar() {
  return (
    <div class="container-1">
      <a href="https://www.linkedin.com/in/fatmas%C3%BCmer/">
        <img className="icon1" src="/images-icons/linkedin.svg" alt="linkedin icon" />
      </a>
      <a href="https://github.com/fgsumer">
        <img className="icon2" src="/images-icons/github.svg" alt="github icon" />
      </a>
      <a href="https://twitter.com/fatmaagocen">
        <img className="icon3" src="/images-icons/twitter.png" alt="twitter icon"></img>
      </a>

      <div id="vertical-line"></div>
    </div>
  );
}

export default VerticalNavBar;
