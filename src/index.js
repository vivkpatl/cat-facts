import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

let straightContent = 'We gonna let Ben handle this';

//This is a hack. Really bad way to handle this.
ReactDOM.render(
  <App>
    <div>
      {straightContent}
    </div>
  </App>,
  document.getElementById('app')
);

//module.hot.accept();