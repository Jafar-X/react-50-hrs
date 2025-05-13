import React, { useState } from 'react';

const ExampleOne = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 50;
    return initialCount;
  });

  const increment = () => setCount((prevCount) => prevCount + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default ExampleOne;
