import React from 'react';
import LinuxPhoto from '../../img/linux.svg'
import Programmer from '../../img/programmer.png';

export const About = () => {
  return <>

        <h2 className="no-margin">Welcome here!</h2>
        <div className="col-12 col">
          <span>
            <img src={Programmer} className="float-left" alt="You here" />
            <h2>
              I'm {'{Fernando Paucar}'}
            </h2>
            <p>Software Developer from Ecuador who love Linux</p>

            <img src={LinuxPhoto} className="float-right" alt="Javascript ♥" />

            <article className="article">
              <h3>About me</h3>
              <p>
                I am 20 years old, currently I am a software developer
                specialized in web development in the Frontend part, I am
                studying Software Engineering at the University of the Armed
                Forces Espe in Ecuador. I use technologies such as React, Git,
                Laravel, Docker, MySQL, PostgreSQL and especially Linux because
                it gives me a greater workflow and efficiency.
              </p>
            </article>
          </span>
        </div>
    
  </>;
};
