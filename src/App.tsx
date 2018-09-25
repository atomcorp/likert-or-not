import * as React from 'react';
import './App.css';
import Page from './components/Page';

import logo from './logo.svg';

class App extends React.Component {
  // public test =() => {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Page />
      </div>
    );
  }
}

export default App;
