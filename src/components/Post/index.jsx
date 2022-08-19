import React from 'react';
import { getPost } from '../../services/getPost';
import { useState, useEffect } from 'react';

export const Post = () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    getPost('fernandopr11').then(data => setInformation(data));
  }, []);

  return (
    <div>
      <h4>Post about software</h4>
      {information.map(element =>
        <article class="article">
          <h1 class="article-title">
            {element.title}
          </h1>
          <img src={element.cover_image} alt="" />
          <p class="article-meta">
            Written by <a href="#">{element.user.name}</a>
          </p>
          <p class="text-lead">
            {' '}{element.description}{' '}
          </p>

          <div class="row">
            <a href={element.url} className="paper-btn"
            target='_blank'
            >
              Read More
            </a>
          </div>
        </article>
      )}
    </div>
  );
};
