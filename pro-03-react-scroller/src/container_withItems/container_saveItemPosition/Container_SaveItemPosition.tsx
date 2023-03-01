import React, {useEffect, useRef, useState} from 'react';
import '../common/container.css';
import Item from "../common/Item";
import {createItem, createItemsSortedRandomly, shuffle} from "../common/ItemHelper";

const Container_SaveItemPosition = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>();


  useEffect(() => {
    console.log(`ScrollRef.current is changed (ScrollRef itself doesn't change): ${scrollRef?.current}`);
    if (scrollRef?.current) {
      console.log(`ScrollRef scrollTo ${scrollPosition}`);
      scrollRef.current!.scrollTo({top: scrollPosition});
    }
  }, [scrollRef?.current])

  const onClickRegenItems = () => {
    setItems(oldState => createItemsSortedRandomly(50));
  }

  const onClickAddItems = () => {
    setItems(oldState => {
      const newState: Item[] = [...oldState];
      for (let i = 1; i <= 10; i++) {
        newState.push(createItem(oldState.length + i));
      }
      return newState;
    });
  }

  const onClickChangeVisibility = () => {
    setVisibility(oldState => !oldState);
  }

  const onScroll = () => {
    console.log(`Save scroll position into React state: ${scrollRef?.current?.scrollTop}`)
    setScrollPosition(scrollRef?.current?.scrollTop);
  }

  const onClickChangeVisibilityWithSameScrollPosition = () => {
    setItems(oldState => shuffle(oldState));
    setVisibility(oldState => !oldState);
  }

  const onClickItem = (itemId: string) => {
    setSelectedItemId(itemId);
  }

  const listItemsRender = items.map((item) =>
    <div className="item" key={item.id} onClick={() => onClickItem(item.id)}>id: {item.id}, name: {item.name}</div>
  );

  return (
    <div style={{border: 1, padding: 20}}>
      <div>Scroller save items position</div>
      <div>
        <button onClick={onClickRegenItems}>Regen 50 Items (your scroller position should be kept the same)</button>
        <button onClick={onClickAddItems}>Add 10 Items (your scroller position should be kept the same)</button>
      </div>

      <div>
        <button onClick={onClickChangeVisibility}>Change Visibility (your scroller position will be reset)</button>
        <button onClick={onClickChangeVisibilityWithSameScrollPosition}>Change Visibility (items' order will be changed, but it will try to scroll to
          the item that you choosed)
        </button>
      </div>
      <div>Scroll Position: {scrollPosition}</div>
      <div>Selected Item Id: {selectedItemId}</div>
      {visibility &&
      <div className="container" ref={scrollRef} onScroll={onScroll}>
          <div>{listItemsRender}</div>
      </div>
      }
    </div>
  );
};

export default Container_SaveItemPosition;
