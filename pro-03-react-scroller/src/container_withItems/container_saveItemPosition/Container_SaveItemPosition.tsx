import React, {useEffect, useRef, useState} from 'react';
import '../common/container.css';
import Item from "../common/Item";
import {createItem, createItemsSortedRandomly, shuffle} from "../common/ItemHelper";

const Container_SaveItemPosition = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [visibility, setVisibility] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const itemsRef = useRef<Array<HTMLDivElement | null>>([])
  const [selectedItemId, setSelectedItemId] = useState<string | undefined>();
  // const [selectedItemPosition, setSelectedItemPosition] = useState<number | undefined>();

  useEffect(() => {
    console.log(`containerRef.current is changed (ScrollRef itself doesn't change): ${containerRef?.current}`);
    if (containerRef?.current) {
      if (selectedItemId) {
        console.log(`containerRef scrollTo itemId ${selectedItemId}`);
        const itemPosition = findPositionOfItem(selectedItemId);
        console.log(`position of itemId ${itemPosition}`);
        containerRef.current!.scrollTo({top: itemPosition});
      } else {
        console.log(`containerRef scrollTo previous position: ${scrollPosition}`);
        containerRef.current!.scrollTo({top: scrollPosition});
      }
    }
  }, [containerRef.current, itemsRef.current])

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
    console.log(`Save scroll position into React state: ${containerRef?.current?.scrollTop}`)
    setScrollPosition(containerRef?.current?.scrollTop);
  }

  const onClickChangeVisibilityWithSameScrollPosition = () => {
    setItems(oldState => shuffle(oldState));
    setVisibility(oldState => !oldState);
  }

  const onClickItem = (item: Item, index: number) => {
    setSelectedItemId(item.id);
  }

  const findPositionOfItem = (itemId: string): number | undefined => {
    const itemRef = findItemRef(itemId);
    return getRelativeItemPosition(itemRef);
  }

  const findItemRef = (itemId: string): HTMLElement | null => {
    for (let i = 0; i < itemsRef.current.length; i++) {
      const itemRef = itemsRef.current[i];
      const itemKey = itemRef?.getAttribute("itemid");
      if (itemKey && itemKey == itemId) {
        console.log(`Found itemKey: ${itemKey} at index ${i}`);
        return itemRef;
      }
    }
    return null;
  }

  const getRelativeItemPosition = (itemRef: HTMLElement | null): number|undefined => {
    const absItemPosition = itemRef?.offsetTop;
    const absContainerPosition = containerRef.current?.offsetTop;
    const relativeItemPosition = absItemPosition && absContainerPosition ? absItemPosition - absContainerPosition : undefined;
    return relativeItemPosition;
  }

  const listItemsRender = items.map((item, index) =>
    <div
      key={item.id}
      itemID={item.id}
      ref={el => itemsRef.current[index] = el}
      onClick={() => onClickItem(item, index)}
      className="item"
    >
      <span className="itemIndex">[{index}]</span>
      <span className="itemId">id: {item.id}</span>
      name: {item.name}
    </div>
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
      <div className="container" ref={containerRef} onScroll={onScroll}>
          <div>{listItemsRender}</div>
      </div>
      }
    </div>
  );
};

export default Container_SaveItemPosition;
