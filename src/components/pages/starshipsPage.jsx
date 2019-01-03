import React, { Component } from "react";
import ErrorBoundry from "../errorBoundry";
import Row from "../row";
import { StarshipList, StarshipDetails } from "../swComponents";

class StarshipsPage extends Component {
  state = { selectedItem: 10 };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={
          <ErrorBoundry>
            <StarshipDetails itemId={this.state.selectedItem} />
          </ErrorBoundry>
        }
      />
    );
  }
}

export default StarshipsPage;
