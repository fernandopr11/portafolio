import React from 'react';

export const Card = props => {
  return (
    <div className="card">
      <div className="card-header">
        {' '}<p clas>{props.headerText}</p>
      </div>
      <div className="card-body">
        <h4 className="card-title">
          {props.cardTitle}
        </h4>
        <h5 className="card-subtitle">
          {props.cardSubtitle}
        </h5>
        <p className="card-text">
          {props.cardText}
        </p>
        <a
          rel="noreferrer"
          target="_blank"
          href={props.githubUrl}
          className="paper-btn btn-secondary"
        >
          Let me go Here !
        </a>
      </div>
    </div>
  );
};
