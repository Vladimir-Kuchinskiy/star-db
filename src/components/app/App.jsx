import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import ItemList from "../itemList";
import PersonDetails from "../personDetails";

class App extends Component {
  state = { selectedPerson: 5 };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
