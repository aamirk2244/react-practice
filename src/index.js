import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './footer'

import Counter from './components/Counter'

ReactDOM.render(
  <React.StrictMode>
    <Counter/>
    <Footer/>
    {/* <App /> */}

  </React.StrictMode>,
  document.getElementById('root')
);
