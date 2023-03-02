import React, {useEffect, useRef, useState} from 'react';
import '../common/container.css';
import Item from "../common/Item";
import {createItem, createItemsSortedById} from "../common/ItemHelper";
import ItemComp_Simple from "../common/ItemComp_Simple";

const Container_SaveScrollerPosition_Approach02 = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    console.log(`ScrollRef.current is changed (ScrollRef itself doesn't change): ${scrollRef?.current}`);
    if (scrollRef?.current) {
      console.log(`ScrollRef scrollTo ${scrollPosition}`);
      scrollRef.current!.scrollTo({top: scrollPosition});
    }
  }, [scrollRef?.current])

  const onClickRegenItems = () => {
    setItems(oldState => createItemsSortedById(50));
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
    setVisibility(oldState => !oldState);
  }

  const listItemsRender = items.map((item) =>
    <ItemComp_Simple item={item}/>
  );

  return (
    <div style={{borderBottom: 1, padding: 20}}>
      <div>Scroller save scroller position</div>
      <div>
        <button onClick={onClickRegenItems}>Regen 50 Items (your scroller position should be kept the same)</button>
        <button onClick={onClickAddItems}>Add 10 Items (your scroller position should be kept the same)</button>
      </div>

      <div>
        <button onClick={onClickChangeVisibility}>Change Visibility (your scroller position will be reset)</button>
        <button onClick={onClickChangeVisibilityWithSameScrollPosition}>Change Visibility (your scroller position will be kept the same)</button>
      </div>
      <div>Scroll Position: {scrollPosition}</div>

      {visibility &&
      <div className="container" ref={scrollRef} onScroll={onScroll}>
          <div>{listItemsRender}</div>
      </div>
      }
    </div>
  );
};

export default Container_SaveScrollerPosition_Approach02;
