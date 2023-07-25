import { useContext, useState } from 'react';

import './App.css';
import { Parent } from './components/Parent';
import { CounterContext } from './context/counter';

function App() {
  const { count } = useContext(CounterContext);

  return (
    <div className="App">
      <h3>App</h3>
      <h3>{count}</h3>
      <Parent />
    </div>
  );
}

export default App;
