import React, { useContext } from 'react';

import '../App.css';
import { CounterContext } from '../context/counter';

export const Counter = () => {
  const { count, decrement, increment } = useContext(CounterContext);

  return (
    <div className="Counter">
      <h3>Counter</h3>
      <h3>{count}</h3>
      <div className="card">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
