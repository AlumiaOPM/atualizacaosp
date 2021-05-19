import React from 'react';

import Provider from '../Provider';

import './index.css';

export default function GenericSection({ title, content, sectionId }) {
  return (
    <div
      id={sectionId || null}
    >
      <Provider>
        <div className="generic-section">

          <h3>{title}</h3>
          <div 
            dangerouslySetInnerHTML={{__html: content}} 
            className="content"
          />
        </div>
      </Provider>
    </div>
  )
}
