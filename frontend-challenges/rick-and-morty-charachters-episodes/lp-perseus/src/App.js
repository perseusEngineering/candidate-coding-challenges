import React from 'react';
import logo from './perseus-logo.png';
import './App.css';
import './App.scss';
import { APP_CONSTANTS } from './App.constants';
import Characters from './characters';

function App() {
  return (
    <div className="container">
      <header className="perseus-header">
        <div className="row">
          <div className="col-lg-2">
            <img src={logo} className="perseus-logo" alt="perseus-logo" />
          </div>
          <div className="col-lg-10">
            <h2 id="perseus-site-title">{ APP_CONSTANTS.SITE_TITLE } </h2>
          </div>
        </div>
      </header>
      <section className="perseus-body-section">
        <Characters />
      </section>
    </div>
  );
}

export default App;
