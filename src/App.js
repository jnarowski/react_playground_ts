import React, { Component } from 'react';
import './App.css';
import {
  connect
} from 'react-redux';
import {
  simpleAction
} from './store/actions/simpleAction'

const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  doSimpleAction = (event) => {
    simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.doSimpleAction}>
            Test redux action
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
