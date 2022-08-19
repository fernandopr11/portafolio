import React from 'react';

import githubIcon from '../../img/github.svg';
import emailIcon from '../../img/email.svg';
import linkedinIcon from '../../img/linkedin.svg';

export const SocialNetWorks = () => {
  return (
    <div className="row">
      <div className="col-1" />
      <div className="md-1 sm-6">
        <a
          href="https://www.linkedin.com/in/fernando-paucar-84b276165"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={linkedinIcon}
            alt="My Linkedin"
            className="no-border icon-social"
          />
        </a>
      </div>
      <div className="md-1 sm-6">
        <a
          href="https://github.com/fernandopr11/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={githubIcon}
            alt="My Github"
            className="no-border icon-social"
          />
        </a>
      </div>
      <div className="md-1 sm-6">
        <a
          href="mailto:fernandopaucar149@gmail.com?subject=Mail from portfolio"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="My Email"
            className="no-border icon-social"
            src={emailIcon}
          />
        </a>
      </div>
    </div>
  );
};
