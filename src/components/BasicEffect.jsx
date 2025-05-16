import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const BasicEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Prints only when the component mounts');
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default BasicEffect;
