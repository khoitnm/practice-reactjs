import React from 'react';
import '../common/container.css';
import Item from "../common/Item";

export interface Props {
  item: Item
}

const ItemComp_Simple = ({item}: Props): JSX.Element => {
  return (
    <div className="item" key={item.id}><span className="itemId">id: {item.id}</span> name: {item.name}</div>
  );
};

export default ItemComp_Simple;
