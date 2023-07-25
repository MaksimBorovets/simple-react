import React, { useContext } from 'react';

import { Counter } from './Counter';
import { CounterContext } from '../context/counter';

export const Child = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="Child">
      <h3>Child</h3>
      <h3>{count}</h3>
      <Counter />
    </div>
  );
};
