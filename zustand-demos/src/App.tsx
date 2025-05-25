import React from 'react';
import { useCounter } from './store';
import OtherComponent from './components/OtherComponent';

const App = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <h2>Count: {count}</h2>
      <OtherComponent />
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
    </div>
  );
};

export default App;
