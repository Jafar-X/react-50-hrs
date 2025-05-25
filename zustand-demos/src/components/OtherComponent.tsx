import React from 'react';
import { useCounter } from '../store';

const OtherComponent = () => {
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default OtherComponent;
