import React from 'react';
import MathWorksLogo from '../resources/img/pic-header-mathworks-logo.svg';

export default () => (
  <footer className="footer mosquiteer">
    <div className="content has-text-centered">
      <p>
        <strong>Demo for Hyderabad Hack Day</strong>
        <br />
        <a href="https://www.mathworks.com/">
          <img src={MathWorksLogo} alt="MathWorks" width="150" height="100" />
        </a>
      </p>
    </div>
  </footer>
);
