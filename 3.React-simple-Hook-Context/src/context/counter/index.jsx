import React, { createContext, useState } from 'react';

import '../../App.css'

export const CounterContext = createContext();

export const CounterStateProvider = ({ children }) => {
  const [count, setCount] = useState(100);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      <div className='Context'>{children}</div>
    </CounterContext.Provider>
  );
};
