import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import "./randomPlanet.css";

import LoaderSpinner from "../loaderSpinner";
import PlanetView from "./planetView";
import ErrorIndicator from "../errorIndicator/errorIndicator";

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];

      if (typeof value === "number" && !isNaN(value)) {
        return null;
      }

      return new TypeError(`${componentName}: ${propName} must be a number`);
    }
  };

  swapiService = new SwapiService();

  state = { planet: {}, loading: true, error: false };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = _error => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <LoaderSpinner /> : null;
    const content = hasData ? <PlanetView {...planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
