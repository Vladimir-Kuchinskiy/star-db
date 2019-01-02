import React, { Component } from "react";
import "./peoplePage.css";
import ItemList from "../itemList";
import PersonDetails from "../personDetails";
import SwapiService from "../../services/swapiService";
import ErrorBoundry from "../errorBoundry";
import Row from "../row";

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = { selectedPerson: 5 };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
