import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  decrement,
  increment,
  incrementByAmount,
} from './store/slices/counter';
import { changeName } from './store/slices/auth';

function App() {
  const [ammountToCounter, setAmmountToCounter] = useState(2);
  const [newUserName, setNewUsername] = useState('');
  const count = useSelector((state) => state.counter.value);
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>{username}</h3>
      <h3>Count {count}</h3>
      <div className="card">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <input
          type="number"
          value={ammountToCounter}
          onChange={(e) => setAmmountToCounter(+e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(ammountToCounter))}>
          Decrement
        </button>
      </div>
      <div>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button
          disabled={newUserName.trim().length === 0}
          onClick={() => dispatch(changeName(newUserName))}>
          Change name
        </button>
      </div>
    </>
  );
}

export default App;
