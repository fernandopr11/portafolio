import React from 'react';
import {Card} from '../Card'

export const Projects = () => {
  return (
    <>
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
    </>
  );
};
