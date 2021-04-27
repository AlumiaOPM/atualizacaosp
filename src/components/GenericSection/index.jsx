import React from 'react';

import Provider from '../Provider';

import './index.css';

export default function GenericSection({ background, title, content, color, sectionId }) {
  return (
    <div
      id={sectionId || null}
      style={{
        background: background,
        color: `${color === "dark" ? '#A3A3A3' : '#fff'}`,
      }}
    >
      <Provider>
        <div className="generic-section">

          <h3 style={{color: `${color === "dark" ? '#727475' : '#fff'}`}}>{title}</h3>
          <div 
            dangerouslySetInnerHTML={{__html: content}} 
            className="content"
          />

        </div>
      </Provider>
    </div>
  )
}
