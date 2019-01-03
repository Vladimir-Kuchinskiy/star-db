import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../randomPlanet";
import ErrorButton from "../errorButton";
import ErrorBoundry from "../errorBoundry";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapiServiceContext";
import SwapiService from "../../services/swapiService";
import DummySwapiService from "../../services/dummySwapiService";

class App extends Component {
  state = { hasError: false, swapiService: new SwapiService() };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log("Changed to", Service.name);
      return { swapiService: new Service() };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <div className="row mb2 button-row">
              <div className="col">
                <ErrorButton />
              </div>
            </div>
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
