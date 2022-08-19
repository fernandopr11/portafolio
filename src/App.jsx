import React from 'react';
import '../node_modules/papercss/dist/paper.min.css';
import './css/App.css';

import { Card } from './components/Card';
import { SocialNetWorks } from './components/SocialNetworks';
import LinuxPhoto from './img/linux.svg';
import Programmer from './img/programmer.png'

let name = '{Fernando Paucar}';
function App() {
  return (
    <div className="paper container">
      <div className="row">
        <h2 className="no-margin">Welcome here!</h2>
        <div className="col-12 col">
          <span>
            <img src={Programmer} className="float-left" alt="You here" />
            <h2>
              I'm {name}
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
        <h4>
          Here is some project's of my{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.github.com/fernandopr11"
          >
            github profile
          </a>
        </h4>
        <div className="md-6 sm-12 col">
          <Card
            headerText="Studying React I made my first application"
            cardTitle="GitHub User Search"
            cardSubtitle="Used Github API to show information of user witch React JS Vercel as a packager."
            cardText="You can access the project in the next button"
            githubUrl="https://github.com/BevilaquaBruno"
          />
        </div>
        <div className="md-6 sm-12 col">
          <Card
            headerText="Deepening in react I made the following application"
            cardTitle="Ghipy React App"
            cardSubtitle="Use Ghipy api to display gifs from different categories and save your favorites by user authentication."
            cardText="You can access the project in the next button"
            githubUrl="https://github.com/BevilaquaBruno/"
          />
        </div>
      </div>

      <h4>Post about software</h4>

      <div className="row ">
        <div className="col-12 col">
          <h4 className="no-margin">My social networks:</h4>
        </div>
      </div>
      <SocialNetWorks />
      <h5>
        created with ♥ by {name} with{' '}
        <a targer="_blank" href="https://www.getpapercss.com/">
          PaperCSS
        </a>
      </h5>
    </div>
  );
}

export default App;
