import * as React from 'react';
import './App.css';
import Button from './container/button';
import Collapse from './container/collapse';
import logo from './logo.svg';

class App extends React.Component {

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button/>
        <Collapse/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
