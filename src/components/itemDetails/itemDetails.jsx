import React, { Component } from "react";
import "./itemDetails.css";
import LoaderSpinner from "../loaderSpinner/loaderSpinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";
import ErrorButton from "../errorButton";

class ItemDetails extends Component {
  state = { item: null, loading: true, error: false, image: null };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  onItemLoaded = item => {
    this.setState({
      item,
      loading: false,
      image: this.props.getImageUrl(item.id)
    });
  };

  onError = _error => {
    this.setState({ error: true, loading: false });
  };

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) return;
    getData(itemId)
      .then(this.onItemLoaded)
      .catch(this.onError);
  }

  render() {
    const { item, loading, error, image } = this.state;
    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <LoaderSpinner /> : null;
    const content = hasData ? (
      <React.Fragment>
        <img className="item-image" src={image} alt="Item" />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </React.Fragment>
    ) : null;

    return (
      <div className="item-details card">
        {errorMessage}
        {loader}
        {content}
        <ErrorButton />
      </div>
    );
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export default ItemDetails;

export { Record };
