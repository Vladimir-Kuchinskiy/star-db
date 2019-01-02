import React, { Component } from "react";
import "./itemList.css";
import SwapiService from "../../services/swapiService";
import LoaderSpinner from "../loaderSpinner";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = { peopleList: null };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => this.setState({ peopleList }));
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <LoaderSpinner />;
    }

    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemList;
