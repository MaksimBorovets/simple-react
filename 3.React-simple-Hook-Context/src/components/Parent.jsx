import React, { useContext } from 'react';

import { Child } from './Child';
import '../App.css';
import { CounterContext } from '../context/counter';

export const Parent = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="Parent">
      <h3>Parent</h3>
      <h3>{count}</h3>
      <Child />
    </div>
  );
};
