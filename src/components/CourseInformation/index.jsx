import React from 'react';

import Provider from '../Provider';

import './index.css';

export default function CourseInformation({ hero }) {
  return (
    <Provider>
      <div className="flexSection">
        <div className="flexItem">
          <img src={hero} alt="Hero" />
        </div>

        <div className="flexItem">
          <ul>
            <li>São Paulo - Joaquim Távoa</li>
            <li>Aulas on-line</li>
            <li>Atualização</li>
            <li>Atualização</li>
            <li>Aulas: ao vivo por webconferência, terça e quinta-feira</li>
            <li>Aulas: ao vivo por webconferência, terça e quinta-feira</li>
          </ul>
        </div>
      </div>
    </Provider>
  );
};
