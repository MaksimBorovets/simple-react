import { useState } from 'react';

import './App.css';
import { Counter } from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const onIncrementClickHandler = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrementClickHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <Counter
        increment={onIncrementClickHandler}
        decrement={onDecrementClickHandler}
        count={count}
      />
    </div>
  );
}

export default App;
