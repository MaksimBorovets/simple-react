import React from 'react';

export const Counter = ({ count, increment, decrement }) => {
	
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
