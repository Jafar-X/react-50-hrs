import React, { useRef } from 'react';

const FocusInput = () => {
  const inputElement = useRef(null);
  console.log('input:', inputElement);

  const focustInput = () => {
    inputElement.current.focus();
    inputElement.current.value = 'Hello';
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focustInput()}>Focus and Write Hello</button>
    </div>
  );
};

export default FocusInput;
