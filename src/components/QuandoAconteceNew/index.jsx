import React from 'react';

import Provider from '../Provider';

import './index.css';

export default function QuandoAcontece({ iniciopt1, iniciopt2, sectionId }) {
  return (
    <div className="quando-acontece" id={sectionId}>
      <Provider>

        <div className="quando-acontece-flexSection">
          <div className="quando-acontece-flexItem">
            <i aria-hidden="true" className="icone icone-calendar"></i>
          </div>
          <div className="quando-acontece-flexItem">
            <h3>Quando acontece?</h3>
            <p>{iniciopt1}</p>
            <p>{iniciopt2}</p>
          </div>
        </div>

      </Provider>
    </div>
  )
}
