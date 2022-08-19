import React from 'react';
import '../node_modules/papercss/dist/paper.min.css';
import './css/App.css';
import { SocialNetWorks } from './components/SocialNetworks';
import { Post } from './components/Post';
import { Projects } from './components/Projects';
import { About } from './components/About';

let name = '{Fernando Paucar}';
function App() {
  return (
    <div className="paper container">
      <div className="row">
        <About />
        <Projects />
      </div>

      <Post />

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
