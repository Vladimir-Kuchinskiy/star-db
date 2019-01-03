import React from "react";
import "./itemList.css";

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map(item => {
    const { id } = item;
    const value = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {value}
      </li>
    );
  });
  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

export default ItemList;
