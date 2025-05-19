import React, { useReducer, useState } from 'react';
import { initialState } from './counterReducer';
import { countReducer } from './counterReducer';
const CounterWithReducer = () => {
  const [inputValue, setInputValue] = useState(0);
  const [state, dispatch] = useReducer(countReducer, initialState);
  const handleIncrementByAmount = () => {
    dispatch({ type: 'incrementByAmount', payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: 'decrementByAmount', payload: Number(inputValue) });
    setInputValue(0);
  };
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button onClick={handleIncrementByAmount}>Increment By Amount</button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button onClick={handleDecrementByAmount}>Decrement By Amount</button>
    </div>
  );
};

export default CounterWithReducer;
