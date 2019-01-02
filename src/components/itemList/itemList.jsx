import React, { Component } from "react";
import "./itemList.css";
import SwapiService from "../../services/swapiService";
import LoaderSpinner from "../loaderSpinner";

class ItemList extends Component {
  state = { itemList: null };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => this.setState({ itemList }));
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const value = this.props.children(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {value}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <LoaderSpinner />;
    }

    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemList;
