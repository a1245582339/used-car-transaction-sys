import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { login } from './api/user'
const App: React.FC = () => {
  useEffect(() => {
    login({ tel: '13333333333', password: '111111' })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1
        </a>
      </header>
    </div>
  );
}

export default App;
