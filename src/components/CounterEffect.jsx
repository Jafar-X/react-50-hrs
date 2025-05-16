import React, { useEffect, useState } from 'react';

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = 'Increment' + `${count}`;
  }, [count]);
  return (
    <div>
      <h1>Count from CounterEffect: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default CounterEffect;
