import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import ErrorButton from "../errorButton";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import PeoplePage from "../peoplePage/index";
import ItemList from "../itemList/itemList";
import PersonDetails from "../personDetails/personDetails";
import SwapiService from "../../services/swapiService";

class App extends Component {
  swapiService = new SwapiService();

  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row mb2 button-row">
          <div className="col">
            <ErrorButton />
          </div>
        </div>
        <PeoplePage />
      </div>
    );
  }
}

export default App;
