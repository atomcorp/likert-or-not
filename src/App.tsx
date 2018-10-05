import * as React from 'react';
import css from './App.css';
import Page from './examples/Page';

import logo from './logo.svg';

class App extends React.Component {
  // public test =() => {}
  render() {
    return (
      <div className={css.container}>
        <header className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h1 className={css.title}>Welcome to React</h1>
        </header>
        <Page />
      </div>
    );
  }
}

export default App;
