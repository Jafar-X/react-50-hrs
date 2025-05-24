import React from 'react';
import { useRef } from 'react';

const FocustInput = () => {
  const focus = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    focus.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={focus} placeholder="Input something" />
      <button onClick={handleSubmit}>Focus Input</button>
    </div>
  );
};

export default FocustInput;
