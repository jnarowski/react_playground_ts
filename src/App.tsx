import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { dispatch } from "./store";

import { companies } from "./store/reducers";

interface State {
  companies: {
    data: [];
  };
}

interface Props {
  companies: [];
}

const mapStateToProps = (state: State) => {
  return {
    companies: state.companies.data
  };
};

class App extends Component<Props> {
  doCompanyAction = () => {
    companies.fetchSomething();
  };

  doCompanyClear = () => {
    companies.clear();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <pre>{JSON.stringify(this.props.companies)}</pre>
          <button onClick={this.doCompanyAction}>Test company load</button>
          <button onClick={this.doCompanyClear}>Test company clear</button>
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
