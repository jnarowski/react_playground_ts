import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { companies } from "./store/reducers/index";

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
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
