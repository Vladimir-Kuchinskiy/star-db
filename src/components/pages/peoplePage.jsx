import React, { Component } from "react";
import ErrorBoundry from "../errorBoundry";
import Row from "../row";
import { PersonList, PersonDetails } from "../swComponents";

class PeoplePage extends Component {
  state = { selectedItem: 5 };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={
          <ErrorBoundry>
            <PersonDetails itemId={this.state.selectedItem} />
          </ErrorBoundry>
        }
      />
    );
  }
}

export default PeoplePage;
