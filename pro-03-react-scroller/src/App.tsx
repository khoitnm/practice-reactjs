import React, {useState} from 'react';
import './App.css';
import Container_SaveItemPosition from "./container_withItems/container_saveItemPosition/Container_SaveItemPosition";
import Container_SaveScrollerPosition_Approach01
  from "./container_withItems/container_saveScrollerPosition_approach01/Container_SaveScrollerPosition_Approach01";
import Container_SaveScrollerPosition_Approach02
  from "./container_withItems/container_saveScrollerPosition_approach02/Container_SaveScrollerPosition_Approach02";

function App() {
  const [page,setPage] = useState<number>(0);

  return (
    <div className="App">
      <button onClick={()=> setPage(0)}>Container_SaveScrollerPosition_Approach01 (use onScroll)</button>
      <button onClick={()=> setPage(1)}>Container_SaveScrollerPosition_Approach02 (use element.addEventListener('onScroll',...)</button>
      <button onClick={()=> setPage(2)}>Container_SaveItemPosition</button>

      {page === 0 && <Container_SaveScrollerPosition_Approach01/>}
      {page === 1 && <Container_SaveScrollerPosition_Approach02/>}
      {page === 2 && <Container_SaveItemPosition/>}
    </div>
  );
}

export default App;
