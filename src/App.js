import React, { useState, useCallback } from 'react';
import logo from './citrus.png';
import './App.css';
import Switch from 'react-switch';

import Rodal from 'rodal';
// include styles
import 'rodal/lib/rodal.css';

function App() {

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);


  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(
      () => setVisible(state => !state),
      [setVisible],
    );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title">
          Citrus risk profile
        </p>

        <div className="Form-container">
          <form className="Form">
            <label for="crn"></label>
            <input className="Company-no-input" id="crn" type="text" name="crn" placeholder="Enter CRN" />
          </form>

          <input className="Submit" type="submit" value="Submit" onClick={setVisible}/>
        </div>

        <div className="Switches">
          <div className="Switch1">
            <p className="Company-summary">Company Summary</p>
            <Switch onChange={setChecked1} checked={checked1} />
          </div>

          <div className="Switch2">
            <p className="KeyParties">Key Parties</p>
            <Switch onChange={setChecked2} checked={checked2} />
          </div>

          <div className="Switch3">
            <p className="Peps">Peps and Sanctions</p>
            <Switch onChange={setChecked3} checked={checked3} />
          </div>

          <div className="Switch4">
            <p className="Authenticate">Authenticate</p>
            <Switch onChange={setChecked4} checked={checked4} />
          </div>

        </div>

        <div>

          <Rodal className="Rodal" visible={visible} onClose={toggleVisible} animation="flip">
            <div>
              <p className="Citrus-data">{"{Citrus Data}"}</p>
            </div>
          </Rodal>
        </div>

        <a
          className="App-link"
          href="https://developer.experian.com/citrus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Citrus documentation
        </a>

      </header>
    </div>
  );
}

export default App;
