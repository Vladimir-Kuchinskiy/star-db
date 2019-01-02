import React, { Component } from "react";
import "./peoplePage.css";
import ItemList from "../itemList";
import PersonDetails from "../personDetails";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import ErrorButton from "../errorButton/index";

class PeoplePage extends Component {
  state = { selectedPerson: 5, hasError: false };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  componentDidCatch(_error, _info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
          <ErrorButton />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
