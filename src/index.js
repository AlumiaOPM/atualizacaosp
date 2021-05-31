import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-M5M4DDH'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
