import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import ArtNrConverter from './components/articleNrConverter/ArtNrConverter';
import Splits from './components/splits/Splits';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: ''
    };
  }
  setIds = ids => {
    this.setState({ ids });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/generator"
            render={() => (
              <ArtNrConverter ids={this.state.ids} setIds={this.setIds} />
            )}
          />
          <Route
            path="/split"
            component={() => (
              <Splits ids={this.state.ids} setIds={this.setIds} />
            )}
          />
          <Redirect to="/generator" />
        </Switch>
      </div>
    );
  }
}

export default App;
