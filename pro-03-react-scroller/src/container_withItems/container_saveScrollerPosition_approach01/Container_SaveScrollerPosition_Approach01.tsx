import React, {useEffect, useRef, useState} from 'react';
import '../common/container.css';
import Item from "../common/Item";
import {createItem, createItemsSortedById} from "../common/ItemHelper";
import ItemComp_Simple from "../common/ItemComp_Simple";

const Container_SaveScrollerPosition_Approach01 = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [visibility, setVisibility] = useState<boolean>(true);
  // const [scrollPosition, setScrollPosition] = useState<number>(0);
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const setScrollPosition = (position: number): void => {
    console.log(`Save scrollPosition ${position}`);
    sessionStorage.setItem('practice:scrollPosition', position.toString());
  }

  const getScrollPosition = (): number | null => {
    const position = sessionStorage.getItem('practice:scrollPosition');
    return position ? +position : null;
  }

  useEffect(() => {
    console.log(`scrollRef.current is changed: ${scrollRef?.current}`);
    if (scrollRef?.current) {
      console.log(`scrollRef.current is changed and exist, re-calculate scroll position.`);
      const position = getScrollPosition();
      console.log(`ScrollRef scrollTo ${position}`);
      if (position) {
        scrollRef.current!.scrollTo({top: position});
      }
    }
    // ReactJS may show this warning " Mutable values like 'scrollRef.current' aren't valid dependencies because mutating them doesn't re-render the component"
    // However, please don't change it to [scrollRef], doing so will not run this effect after click visiable/invisible button.
    // Option 2 is depend on [visibility] (because we know the list is changed when visibility is changed)
  }, [scrollRef.current])

  const onClickRegenItems = () => {
    setItems(oldState => createItemsSortedById(50));
  }

  const onClickAddItems = () => {
    console.log(``)
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

  console.log(`render`);
  return (
    <div style={{borderBottom: 1, padding: 20}}>
      <div>Scroller save scroller position (use onScroll event)</div>
      <div>
        <button onClick={onClickRegenItems}>Regen 50 Items (your scroller position should be kept the same)</button>
        <button onClick={onClickAddItems}>Add 10 Items (your scroller position should be kept the same)</button>
      </div>

      <div>
        <button onClick={onClickChangeVisibility}>Change Visibility (your scroller position will be reset)</button>
        <button onClick={onClickChangeVisibilityWithSameScrollPosition}>Change Visibility (your scroller position will be kept the same)</button>
      </div>
      {visibility &&
      <div className="container" ref={scrollRef} onScrollCapture={onScroll}>
          <div>
            {items.map((item) => {
              console.log(`render item ${item.id}`);
              return <ItemComp_Simple key={item.id} item={item}/>
            })}
          </div>
      </div>
      }
    </div>
  );
}
;

export default Container_SaveScrollerPosition_Approach01;
