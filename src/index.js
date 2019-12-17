import React from 'react';
import ReactDOM from 'react-dom';

let straightContent = 'We gonna let Ben handle this';

//This is a hack. Really bad way to handle this.
if (typeof window !== 'undefined') {
  ReactDOM.render(
    <div>{straightContent}</div>,
    document.getElementById('app')
  );
}

//module.hot.accept();