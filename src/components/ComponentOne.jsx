import React from 'react';

const ComponentOne = ({ count, onClickHandler }) => {
  //const handleClick = () => onClickHandler;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => onClickHandler()}>Increment</button>
    </div>
  );
};

export default ComponentOne;
