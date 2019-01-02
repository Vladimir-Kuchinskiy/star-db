import React, { Component } from "react";
import "./personDetails.css";
import SwapiService from "../../services/swapiService";

import PersonView from "./personView";
import LoaderSpinner from "../loaderSpinner/loaderSpinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = { person: null, loading: true, error: false };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  onPersonLoaded = person => {
    this.setState({ person, loading: false });
  };

  onError = _error => {
    this.setState({ error: true, loading: false });
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  }

  render() {
    const { person, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <LoaderSpinner /> : null;
    const content = hasData ? <PersonView {...person} /> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

export default PersonDetails;
