import React from 'react';

import './index.css';

export default function Provider({ children }){
  return (
    <div className="provider">
      {children}
    </div>
  )
}
