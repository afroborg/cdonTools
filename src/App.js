import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import ArtNrConverter from './components/articleNrConverter/ArtNrConverter';
import Splits from './components/splits/Splits';
import V2ProductGenerator from './components/v2productgenerator/V2ProductGenerator';
import V4ProductGenerator from './components/v4productgenerator/V4ProductGenerator';

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
          <Route
            path="/v2-product-generator"
            component={() => <V2ProductGenerator />}
          />
          <Route
            path="/v4-product-generator"
            component={() => <V4ProductGenerator />}
          />
          <Redirect to="/generator" />
        </Switch>
      </div>
    );
  }
}

export default App;
