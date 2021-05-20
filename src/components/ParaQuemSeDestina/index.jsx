import React from 'react';

import Disc from '../../assets/Disc2';

import Provider from '../Provider';

import './index.css';

export default function ParaQuemSeDestina({ content }) {
  return (
    <div className="para-quem-se-destina">
      <Disc
        fill="#F4F4F4"
        style={{
          transform: "scale(1, -1)",
          position: "absolute",
          top: 0,
          zIndex: -1,
        }}
      />
      <Provider>
        <div className="para-quem-se-destina-container">
          <div className="item">
            <div className="icon-container">
              <i aria-hidden="true" class="icone icone-022-teamwork"></i>
            </div>
          </div>
          <div className="item">
            <h3>Para quem se destina?</h3>
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="content"
            />
          </div>
        </div>
      </Provider>
    </div>
  )
}
