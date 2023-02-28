import React, {useState} from 'react';
import './scroller.css';
import Item from "./Item";

const createItems = (itemsCount: number): Item[] => {
  const result: Item[] = [];
  for (let i = 0; i < itemsCount; i++) {
    result.push({
      id: `${i}`,
      name: `Name ${i} ${Date.now()}`
    });
  }
  return result;
}

const Scroller = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [display, setDisplay] = useState<boolean>(true);

  const onClickRegenItems = () => {
    setItems(oldState => createItems(50));
  }
  const onClickAddItems = () => {
    setItems(oldState => {
      const newState: Item[] = [...oldState];
      for (let i = 1; i <= 10; i++) {
        newState.push({
          id: `${newState.length + i}`,
          name: `Name ${newState.length + i} ${Date.now()}`
        });
      }
      return newState;
    });
  }
  const onClickChangeVisibility = () => {
    setDisplay(oldState => !oldState);
  }
  const listItemsRender = items.map((item) =>
    <li key={item.id}>id: {item.id}, name: {item.name}</li>
  );

  return (
    <>
      <div>
        <button onClick={onClickRegenItems}>Regen 50 Items (your scroller position should be kept the same)</button>
        <button onClick={onClickAddItems}>Add 10 Items (your scroller position should be kept the same)</button>
      </div>

      <div>
        <button onClick={onClickChangeVisibility}>Change Visibility (your scroller position will be reset)</button>
      </div>

      {display &&
      <div className="container">
          <ul>{listItemsRender}</ul>
      </div>
      }
    </>
  );
};

export default Scroller;
