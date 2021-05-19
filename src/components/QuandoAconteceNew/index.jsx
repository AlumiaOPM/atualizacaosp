import React from 'react';

import Provider from '../Provider';

import calendar from '../../assets/calendar.svg';

import './index.css';

export default function QuandoAcontece({ iniciopt1, iniciopt2, sectionId }) {
  return (
    <div className="quando-acontece" id={sectionId}>
      <Provider>

        <div className="quando-acontece-flexSection">
          <div className="quando-acontece-flexItem">
            <img 
              src={calendar} 
              style={{
                transform:'scale(0.7)',
                margin: '10px'
              }}
            />
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
