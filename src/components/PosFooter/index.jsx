import React from 'react';
import Provider from '../Provider';

import './index.css';

export default function PosFooter(){
  return (
    <div className="pos-footer">
      <Provider>

        <div className="pos-footer-container">
          <small>ESPM - O Inusitado em constante movimento | © Copyright 2021</small>
        </div>

      </Provider>
    </div>
  )
}
