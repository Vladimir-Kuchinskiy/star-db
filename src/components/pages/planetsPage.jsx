import React, { Component } from "react";
import ErrorBoundry from "../errorBoundry";
import Row from "../row";
import { PlanetList, PlanetDetails } from "../swComponents";

class PlanetPage extends Component {
  state = { selectedItem: 5 };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={
          <ErrorBoundry>
            <PlanetDetails itemId={this.state.selectedItem} />
          </ErrorBoundry>
        }
      />
    );
  }
}

export default PlanetPage;
