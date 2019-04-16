import React, { Component } from 'react';
import './App.css';
import {
  connect
} from 'react-redux';
import {
  simpleAction
} from './store/actions/simpleAction'

import { companies } from './store/reducers'

const mapStateToProps = state => {
  return {
    result: state.contacts.result,
    companies: state.companies.data
  }
}

class App extends Component {
  doSimpleAction = (event) => {
    simpleAction();
  }

  doCompanyAction = () => {
    companies.fetchSomething()
  }

  doCompanyClear = () => {
    console.log('clear....');
    companies.clear()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <pre>
            {
              JSON.stringify(this.props.result)
            }
          </pre>
          <button onClick={this.doSimpleAction}>
            Test redux action
          </button>
          <pre>
            {
              JSON.stringify(this.props.companies)
            }
          </pre>
          <button onClick={this.doCompanyAction}>
            Test company load
          </button>
          <button onClick={this.doCompanyClear}>
            Test company clear
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
